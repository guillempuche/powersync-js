"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9443],{1234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(5893),s=t(1151);const i={id:"QueryResult",title:"Interface: QueryResult",sidebar_label:"QueryResult",sidebar_position:0,custom_edit_url:null},d=void 0,l={id:"react-native-sdk/interfaces/QueryResult",title:"Interface: QueryResult",description:"Object returned by SQL Query executions {",source:"@site/docs/react-native-sdk/interfaces/QueryResult.md",sourceDirName:"react-native-sdk/interfaces",slug:"/react-native-sdk/interfaces/QueryResult",permalink:"/powersync-react-native-sdk/react-native-sdk/interfaces/QueryResult",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"QueryResult",title:"Interface: QueryResult",sidebar_label:"QueryResult",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"PowerSyncOpenFactoryOptions",permalink:"/powersync-react-native-sdk/react-native-sdk/interfaces/PowerSyncOpenFactoryOptions"},next:{title:"SQLWatchOptions",permalink:"/powersync-react-native-sdk/react-native-sdk/interfaces/SQLWatchOptions"}},c={},o=[{value:"Properties",id:"properties",level:2},{value:"insertId",id:"insertid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"rows",id:"rows",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"rowsAffected",id:"rowsaffected",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Object returned by SQL Query executions {\ninsertId: Represent the auto-generated row id if applicable\nrowsAffected: Number of affected rows if result of a update query\nmessage: if status === 1, here you will find error description\nrows: if status is undefined or 0 this object will contain the query results\n}"}),"\n",(0,r.jsx)(n.p,{children:"QueryResult"}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"insertid",children:"insertId"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Optional"})," ",(0,r.jsx)(n.strong,{children:"insertId"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"powersync-sdk-common/lib/db/DBAdapter.d.ts:17"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"rows",children:"rows"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.code,{children:"Optional"})," ",(0,r.jsx)(n.strong,{children:"rows"}),": ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsx)(n.h4,{id:"type-declaration",children:"Type declaration"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"_array"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"any"}),"[]"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Raw array with all dataset"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"item"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(n.code,{children:"idx"}),": ",(0,r.jsx)(n.code,{children:"number"}),") => ",(0,r.jsx)(n.code,{children:"any"})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"A convenience function to acess the index based the row object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"length"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The length of the dataset"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"powersync-sdk-common/lib/db/DBAdapter.d.ts:19"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"rowsaffected",children:"rowsAffected"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"rowsAffected"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:"powersync-sdk-common/lib/db/DBAdapter.d.ts:18"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var r=t(7294);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);