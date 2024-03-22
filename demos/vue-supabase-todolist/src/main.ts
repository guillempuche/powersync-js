import { createApp } from 'vue'
import App from './App.vue'
import { createPowerSync } from '@journeyapps/powersync-vue'
import { Column, ColumnType, Schema, Table, WASQLitePowerSyncDatabaseOpenFactory } from '@journeyapps/powersync-sdk-web';

const powerSync = new WASQLitePowerSyncDatabaseOpenFactory({
    dbFilename: 'test.db',
    schema: new Schema([
      new Table({
        name: 'list',
        columns: [
          new Column({
            name: 'name',
            type: ColumnType.TEXT
          })
        ]
      })
    ])
  }).getInstance();

const app = createApp(App);
const powerSync = createPowerSync({powerSync});

app.use(powerSync);
app.mount('#app');



