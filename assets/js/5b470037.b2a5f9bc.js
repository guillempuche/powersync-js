"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6387],{9938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=s(5893),c=s(1151);const i={id:"StreamingSyncRequest",title:"Interface: StreamingSyncRequest",sidebar_label:"StreamingSyncRequest",sidebar_position:0,custom_edit_url:null},r=void 0,a={id:"common-sdk/interfaces/StreamingSyncRequest",title:"Interface: StreamingSyncRequest",description:"Properties",source:"@site/docs/common-sdk/interfaces/StreamingSyncRequest.md",sourceDirName:"common-sdk/interfaces",slug:"/common-sdk/interfaces/StreamingSyncRequest",permalink:"/powersync-react-native-sdk/common-sdk/interfaces/StreamingSyncRequest",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"StreamingSyncRequest",title:"Interface: StreamingSyncRequest",sidebar_label:"StreamingSyncRequest",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"StreamingSyncKeepalive",permalink:"/powersync-react-native-sdk/common-sdk/interfaces/StreamingSyncKeepalive"},next:{title:"SyncLocalDatabaseResult",permalink:"/powersync-react-native-sdk/common-sdk/interfaces/SyncLocalDatabaseResult"}},d={},o=[{value:"Properties",id:"properties",level:2},{value:"buckets",id:"buckets",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"include_checksum",id:"include_checksum",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"only",id:"only",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"raw_data",id:"raw_data",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"buckets",children:"buckets"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Optional"})," ",(0,t.jsx)(n.strong,{children:"buckets"}),": ",(0,t.jsx)(n.a,{href:"/powersync-react-native-sdk/common-sdk/interfaces/BucketRequest",children:(0,t.jsx)(n.code,{children:"BucketRequest"})}),"[]"]}),"\n",(0,t.jsx)(n.p,{children:"Existing bucket states."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/powersync-ja/powersync-react-native-sdk/blob/093f162/packages/powersync-sdk-common/src/client/sync/stream/streaming-sync-types.ts#L62",children:"client/sync/stream/streaming-sync-types.ts:62"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"include_checksum",children:"include_checksum"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"include_checksum"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsx)(n.p,{children:"Whether or not to compute a checksum for each checkpoint"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/powersync-ja/powersync-react-native-sdk/blob/093f162/packages/powersync-sdk-common/src/client/sync/stream/streaming-sync-types.ts#L72",children:"client/sync/stream/streaming-sync-types.ts:72"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"only",children:"only"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Optional"})," ",(0,t.jsx)(n.strong,{children:"only"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(n.p,{children:"If specified, limit the response to only include these buckets."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/powersync-ja/powersync-react-native-sdk/blob/093f162/packages/powersync-sdk-common/src/client/sync/stream/streaming-sync-types.ts#L67",children:"client/sync/stream/streaming-sync-types.ts:67"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"raw_data",children:"raw_data"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"raw_data"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsx)(n.p,{children:"Changes the response to stringified data in each OplogEntry"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/powersync-ja/powersync-react-native-sdk/blob/093f162/packages/powersync-sdk-common/src/client/sync/stream/streaming-sync-types.ts#L77",children:"client/sync/stream/streaming-sync-types.ts:77"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(7294);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);