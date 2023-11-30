"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[227],{9918:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=r(5893),c=r(1151);const s={id:"PowerSyncBackendConnector",title:"Interface: PowerSyncBackendConnector",sidebar_label:"PowerSyncBackendConnector",sidebar_position:0,custom_edit_url:null},i=void 0,a={id:"react-native-sdk/interfaces/PowerSyncBackendConnector",title:"Interface: PowerSyncBackendConnector",description:"Properties",source:"@site/docs/react-native-sdk/interfaces/PowerSyncBackendConnector.md",sourceDirName:"react-native-sdk/interfaces",slug:"/react-native-sdk/interfaces/PowerSyncBackendConnector",permalink:"/powersync-react-native-sdk/react-native-sdk/interfaces/PowerSyncBackendConnector",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PowerSyncBackendConnector",title:"Interface: PowerSyncBackendConnector",sidebar_label:"PowerSyncBackendConnector",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"LockOptions",permalink:"/powersync-react-native-sdk/react-native-sdk/interfaces/LockOptions"},next:{title:"PowerSyncCredentials",permalink:"/powersync-react-native-sdk/react-native-sdk/interfaces/PowerSyncCredentials"}},d={},o=[{value:"Properties",id:"properties",level:2},{value:"fetchCredentials",id:"fetchcredentials",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"uploadData",id:"uploaddata",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"fetchcredentials",children:"fetchCredentials"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"fetchCredentials"}),": () => ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/powersync-react-native-sdk/react-native-sdk/interfaces/PowerSyncCredentials",children:(0,t.jsx)(n.code,{children:"PowerSyncCredentials"})}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 (): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/powersync-react-native-sdk/react-native-sdk/interfaces/PowerSyncCredentials",children:(0,t.jsx)(n.code,{children:"PowerSyncCredentials"})}),">"]}),"\n",(0,t.jsx)(n.p,{children:"Get credentials for PowerSync."}),"\n",(0,t.jsx)(n.p,{children:"This should always fetch a fresh set of credentials - don't use cached\nvalues."}),"\n",(0,t.jsx)(n.p,{children:"Return null if the user is not signed in. Throw an error if credentials\ncannot be fetched due to a network error or other temporary error."}),"\n",(0,t.jsx)(n.p,{children:"This token is kept for the duration of a sync connection."}),"\n",(0,t.jsx)(n.h5,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/powersync-react-native-sdk/react-native-sdk/interfaces/PowerSyncCredentials",children:(0,t.jsx)(n.code,{children:"PowerSyncCredentials"})}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:"powersync-sdk-common/lib/client/connection/PowerSyncBackendConnector.d.ts:14"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"uploaddata",children:"uploadData"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"uploadData"}),": (",(0,t.jsx)(n.code,{children:"database"}),": ",(0,t.jsx)(n.a,{href:"/powersync-react-native-sdk/react-native-sdk/classes/AbstractPowerSyncDatabase",children:(0,t.jsx)(n.code,{children:"AbstractPowerSyncDatabase"})}),") => ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 (",(0,t.jsx)(n.code,{children:"database"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"Upload local changes to the app backend."}),"\n",(0,t.jsx)(n.p,{children:"Use [PowerSyncDatabase.getCrudBatch] to get a batch of changes to upload. See [DevConnector] for an example implementation."}),"\n",(0,t.jsx)(n.p,{children:"Any thrown errors will result in a retry after the configured wait period (default: 5 seconds)."}),"\n",(0,t.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"database"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"/powersync-react-native-sdk/react-native-sdk/classes/AbstractPowerSyncDatabase",children:(0,t.jsx)(n.code,{children:"AbstractPowerSyncDatabase"})})})]})})]}),"\n",(0,t.jsx)(n.h5,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:"powersync-sdk-common/lib/client/connection/PowerSyncBackendConnector.d.ts:21"})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(7294);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);