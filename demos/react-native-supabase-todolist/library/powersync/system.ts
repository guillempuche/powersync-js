import '@azure/core-asynciterator-polyfill';

import { AbstractPowerSyncDatabase, SyncStreamConnectionMethod } from '@powersync/common';
import { PowerSyncDatabase as PowerSyncDatabaseNative } from '@powersync/react-native';
import { PowerSyncDatabase as PowerSyncDatabaseWeb, WASQLiteOpenFactory } from '@powersync/web';
import React from 'react';
import { SupabaseStorageAdapter } from '../storage/SupabaseStorageAdapter';

import { type AttachmentRecord } from '@powersync/attachments';
import Logger from 'js-logger';
import { KVStorage } from '../storage/KVStorage';
import { AppConfig } from '../supabase/AppConfig';
import { SupabaseConnector } from '../supabase/SupabaseConnector';
import { AppSchema } from './AppSchema';
import { PhotoAttachmentQueue } from './PhotoAttachmentQueue';

Logger.useDefaults();

export class System {
  kvStorage: KVStorage;
  storage: SupabaseStorageAdapter;
  supabaseConnector: SupabaseConnector;
  powersync: AbstractPowerSyncDatabase;
  attachmentQueue: PhotoAttachmentQueue | undefined = undefined;

  constructor() {
    this.kvStorage = new KVStorage();
    this.supabaseConnector = new SupabaseConnector(this);
    this.storage = this.supabaseConnector.storage;
    if (PowerSyncDatabaseNative) {
      this.powersync = new PowerSyncDatabaseNative({
        schema: AppSchema,
        database: {
          dbFilename: 'sqlite.db'
        }
      });
    } else {
      this.powersync = new PowerSyncDatabaseWeb({
        schema: AppSchema,
        database: new WASQLiteOpenFactory({
          dbFilename: 'sqlite.db',
          workerURL: new URL('dist/lib_src_worker_db_SharedWASQLiteDB_worker_js.index.umd.js')
        })
      });
    }

    if (AppConfig.supabaseBucket) {
      this.attachmentQueue = new PhotoAttachmentQueue({
        powersync: this.powersync,
        storage: this.storage,
        // Use this to handle download errors where you can use the attachment
        // and/or the exception to decide if you want to retry the download
        onDownloadError: async (attachment: AttachmentRecord, exception: any) => {
          if (exception.toString() === 'StorageApiError: Object not found') {
            return { retry: false };
          }

          return { retry: true };
        }
      });
    }
  }

  async init() {
    await this.powersync.init();
    await this.powersync.connect(this.supabaseConnector, { connectionMethod: SyncStreamConnectionMethod.WEB_SOCKET });

    console.log('connected');
    if (this.attachmentQueue) {
      await this.attachmentQueue.init();
    }
  }
}

export const system = new System();

export const SystemContext = React.createContext(system);
export const useSystem = () => React.useContext(SystemContext);
