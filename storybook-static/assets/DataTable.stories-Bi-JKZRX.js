import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-D2KL6ZxC.js";import{d as X}from"./logger-B8LV6ilf.js";import{S as st,W as dt}from"./SimpleTab-DQnwjAGM.js";import{S as mt}from"./SimpleDropdown-D-OsrBdD.js";import{D as ct}from"./DiveLink-C71QaMM9.js";import{N as Z}from"./NoContent-2ZeuBHbV.js";import"./preload-helper-Dp1pzeXC.js";const v={shouldShowNoContentMessage:a=>!a||!a.listItems||!a.listItems.length?(X.warn("data-table-widget: tab is missing listItems"),!0):!1,makeOwnColumnHeaders:a=>{const n=[];return a&&a.length>0&&a.forEach(c=>{for(const u in c)c.hasOwnProperty(u)&&n.indexOf(u)<0&&n.push(u)}),n},addNumberToColumnHeaders:a=>{const n={};return a.columnTitles.forEach(c=>{let u=!1,P=0;a.columnTitles[0]===c?u=!0:P=a.listItems.reduce((A,D)=>D[c]&&typeof D[c].title=="number"?A+D[c].title:(u=!0,A),0),u?n[c]=c:n[c]=`${c} (${P})`}),n},validateTabLinks:a=>a.listItems.every(n=>Object.keys(n).every(c=>{const u=n[c];return u!=null&&u.url?v.validateLink(u.url):!0})),validateLink:a=>a&&!(a.startsWith("http://")||a.startsWith("https://"))?(X.warn(`data-table-widget: url strings must include http:// or https://. ${a} is invalid`),!1):!0,getContentArray:a=>a?Array.isArray(a)?a:[a]:[],hasMultipleContent:a=>Array.isArray(a)&&a.length>1},ut="DataTable-module__fl-base__ONaG-",bt="DataTable-module__fl-tabs-base__GEDYO",pt="DataTable-module__fl-input__C5alF",ft="DataTable-module__fl-input-cbr__YjBxc",ht="DataTable-module__fl-input-text__wazK8",gt="DataTable-module__fl-btn__-jjVd",Tt="DataTable-module__fl-icon__moTgF",yt="DataTable-module__fl-input-label__cAk1n",_t="DataTable-module__fl-select__4Ifi-",Ct="DataTable-module__main-label__v5uga",Dt="DataTable-module__light__f1OsV",Nt="DataTable-module__heavy__QNftN",xt="DataTable-module__main-label-group__eRhLH",wt="DataTable-module__is-disabled__kIl7j",St="DataTable-module__fl-menu__Yev3O",vt="DataTable-module__button-menu__eO3Qz",Wt="DataTable-module__suit-menu__vNkUg",It="DataTable-module__fl-select-menu__8RKyG",Pt="DataTable-module__select-menu__gJa3N",At="DataTable-module__fl-menu-open__zO6xN",kt="DataTable-module__fl-menu-closed__VJK5X",Lt="DataTable-module__fl-menu-vp-right__mrACz",Vt="DataTable-module__fl-menu-vp-bottom__vpZj9",Ft="DataTable-module__select-menu-list__S65qC",jt="DataTable-module__select-menu-list-item__Fs6iC",Bt="DataTable-module__disabled__4C6y7",Ht="DataTable-module__heading__H94XM",Ot="DataTable-module__fl-button__DlZId",Rt="DataTable-module__filter__d7x99",Mt="DataTable-module__default-option-label__-W9lg",Et="DataTable-module__active__h-NBf",Gt="DataTable-module__active-state-link__g1-G2",$t="DataTable-module__view-all__RNciY",zt="DataTable-module__blocklist__o9JM-",qt="DataTable-module__fl-tool-tip__bAFck",Yt="DataTable-module__flip-x__5Yaw4",Ut="DataTable-module__flip-y__OxEbi",Qt="DataTable-module__fl-grid-row-base__MyOIR",Jt="DataTable-module__data-table-dropdown__SvLZg",Kt="DataTable-module__data-table-no-content__DSo-P",Zt="DataTable-module__widget-title__hzCcR",Xt="DataTable-module__widget-subtitle__2elBD",ea="DataTable-module__cmp-data-table__bc17N",ta="DataTable-module__widget-data-source-row__6Zqet",aa="DataTable-module__widget-data-source__55-Fi",na="DataTable-module__widget-main-content__lSeRf",la="DataTable-module__tabbed-content__aFkeN",oa="DataTable-module__single-content__rF-yw",ia="DataTable-module__table-container__qI2D8",ra="DataTable-module__dive-link-container__VPPDg",sa="DataTable-module__data-table-widget__iqP7p",da="DataTable-module__tab-navigation__mjtvQ",ma="DataTable-module__data-table-wrapper__MzmUc",ca="DataTable-module__table-header-div__eio6H",ua="DataTable-module__align-left__HDfQM",ba="DataTable-module__align-right__VOGek",pa="DataTable-module__align-center__-Hjok",fa="DataTable-module__data-table__hwp4Q",ha="DataTable-module__table-cell-title__JnIBR",ga="DataTable-module__table-cell-text__ToIdj",Ta="DataTable-module__table-band__mcCcE",ya="DataTable-module__table-top-border__z2-s5",_a="DataTable-module__name-column__S04q3",Ca="DataTable-module__stat-column__Qdnek",Da="DataTable-module__dark-stat-column-titles__RL5uS",Na="DataTable-module__bold-stat-columns__ohSdS",xa="DataTable-module__line-break__abtN9",wa="DataTable-module__color-positive__lU2Qd",Sa="DataTable-module__color-negative__00RIc",va="DataTable-module__color-warning__SYEN0",Wa="DataTable-module__color-info__532Qq",Ia="DataTable-module__color-none__QiSnN",Pa="DataTable-module__no-content-wrapper__zCK5J",Aa="DataTable-module__no-content-image__BRKM5",ka="DataTable-module__no-data-icon__YhPDn",La="DataTable-module__no-content-message__lPhrr",Va="DataTable-module__colorConnotationRed__Bxgcj",Fa="DataTable-module__colorConnotationGreen__CuqTk",ja="DataTable-module__colorConnotationYellow__PlTEB",Ba="DataTable-module__colorConnotationBlue__tWpg4",Ha="DataTable-module__colorConnotationBlack__gkBtx",Oa="DataTable-module__half-width__r7q0u",Ra="DataTable-module__third-width__hmaLB",Ma="DataTable-module__full-width__3cFCz",Ea="DataTable-module__dynamic-height__XH5fL",Ga="DataTable-module__stacked__odyez",$a="DataTable-module__panel-active__AchO-",t={"fl-base":"DataTable-module__fl-base__ONaG-",flBase:ut,"fl-tabs-base":"DataTable-module__fl-tabs-base__GEDYO",flTabsBase:bt,"fl-input":"DataTable-module__fl-input__C5alF",flInput:pt,"fl-input-cbr":"DataTable-module__fl-input-cbr__YjBxc",flInputCbr:ft,"fl-input-text":"DataTable-module__fl-input-text__wazK8",flInputText:ht,"fl-btn":"DataTable-module__fl-btn__-jjVd",flBtn:gt,"fl-icon":"DataTable-module__fl-icon__moTgF",flIcon:Tt,"fl-input-label":"DataTable-module__fl-input-label__cAk1n",flInputLabel:yt,"fl-select":"DataTable-module__fl-select__4Ifi-",flSelect:_t,"main-label":"DataTable-module__main-label__v5uga",mainLabel:Ct,light:Dt,heavy:Nt,"main-label-group":"DataTable-module__main-label-group__eRhLH",mainLabelGroup:xt,"is-disabled":"DataTable-module__is-disabled__kIl7j",isDisabled:wt,"fl-menu":"DataTable-module__fl-menu__Yev3O",flMenu:St,"button-menu":"DataTable-module__button-menu__eO3Qz",buttonMenu:vt,"suit-menu":"DataTable-module__suit-menu__vNkUg",suitMenu:Wt,"fl-select-menu":"DataTable-module__fl-select-menu__8RKyG",flSelectMenu:It,"select-menu":"DataTable-module__select-menu__gJa3N",selectMenu:Pt,"fl-menu-open":"DataTable-module__fl-menu-open__zO6xN",flMenuOpen:At,"fl-menu-closed":"DataTable-module__fl-menu-closed__VJK5X",flMenuClosed:kt,"fl-menu-vp-right":"DataTable-module__fl-menu-vp-right__mrACz",flMenuVpRight:Lt,"fl-menu-vp-bottom":"DataTable-module__fl-menu-vp-bottom__vpZj9",flMenuVpBottom:Vt,"select-menu-list":"DataTable-module__select-menu-list__S65qC",selectMenuList:Ft,"select-menu-list-item":"DataTable-module__select-menu-list-item__Fs6iC",selectMenuListItem:jt,disabled:Bt,heading:Ht,"fl-button":"DataTable-module__fl-button__DlZId",flButton:Ot,filter:Rt,"default-option-label":"DataTable-module__default-option-label__-W9lg",defaultOptionLabel:Mt,active:Et,"active-state-link":"DataTable-module__active-state-link__g1-G2",activeStateLink:Gt,"view-all":"DataTable-module__view-all__RNciY",viewAll:$t,blocklist:zt,"fl-tool-tip":"DataTable-module__fl-tool-tip__bAFck",flToolTip:qt,"flip-x":"DataTable-module__flip-x__5Yaw4",flipX:Yt,"flip-y":"DataTable-module__flip-y__OxEbi",flipY:Ut,"fl-grid-row-base":"DataTable-module__fl-grid-row-base__MyOIR",flGridRowBase:Qt,"data-table-dropdown":"DataTable-module__data-table-dropdown__SvLZg",dataTableDropdown:Jt,"data-table-no-content":"DataTable-module__data-table-no-content__DSo-P",dataTableNoContent:Kt,"widget-title":"DataTable-module__widget-title__hzCcR",widgetTitle:Zt,"widget-subtitle":"DataTable-module__widget-subtitle__2elBD",widgetSubtitle:Xt,"cmp-data-table":"DataTable-module__cmp-data-table__bc17N",cmpDataTable:ea,"widget-data-source-row":"DataTable-module__widget-data-source-row__6Zqet",widgetDataSourceRow:ta,"widget-data-source":"DataTable-module__widget-data-source__55-Fi",widgetDataSource:aa,"widget-main-content":"DataTable-module__widget-main-content__lSeRf",widgetMainContent:na,"tabbed-content":"DataTable-module__tabbed-content__aFkeN",tabbedContent:la,"single-content":"DataTable-module__single-content__rF-yw",singleContent:oa,"table-container":"DataTable-module__table-container__qI2D8",tableContainer:ia,"dive-link-container":"DataTable-module__dive-link-container__VPPDg",diveLinkContainer:ra,"data-table-widget":"DataTable-module__data-table-widget__iqP7p",dataTableWidget:sa,"tab-navigation":"DataTable-module__tab-navigation__mjtvQ",tabNavigation:da,"data-table-wrapper":"DataTable-module__data-table-wrapper__MzmUc",dataTableWrapper:ma,"table-header-div":"DataTable-module__table-header-div__eio6H",tableHeaderDiv:ca,"align-left":"DataTable-module__align-left__HDfQM",alignLeft:ua,"align-right":"DataTable-module__align-right__VOGek",alignRight:ba,"align-center":"DataTable-module__align-center__-Hjok",alignCenter:pa,"data-table":"DataTable-module__data-table__hwp4Q",dataTable:fa,"table-cell-title":"DataTable-module__table-cell-title__JnIBR",tableCellTitle:ha,"table-cell-text":"DataTable-module__table-cell-text__ToIdj",tableCellText:ga,"table-band":"DataTable-module__table-band__mcCcE",tableBand:Ta,"table-top-border":"DataTable-module__table-top-border__z2-s5",tableTopBorder:ya,"name-column":"DataTable-module__name-column__S04q3",nameColumn:_a,"stat-column":"DataTable-module__stat-column__Qdnek",statColumn:Ca,"dark-stat-column-titles":"DataTable-module__dark-stat-column-titles__RL5uS",darkStatColumnTitles:Da,"bold-stat-columns":"DataTable-module__bold-stat-columns__ohSdS",boldStatColumns:Na,"line-break":"DataTable-module__line-break__abtN9",lineBreak:xa,"color-positive":"DataTable-module__color-positive__lU2Qd",colorPositive:wa,"color-negative":"DataTable-module__color-negative__00RIc",colorNegative:Sa,"color-warning":"DataTable-module__color-warning__SYEN0",colorWarning:va,"color-info":"DataTable-module__color-info__532Qq",colorInfo:Wa,"color-none":"DataTable-module__color-none__QiSnN",colorNone:Ia,"no-content-wrapper":"DataTable-module__no-content-wrapper__zCK5J",noContentWrapper:Pa,"no-content-image":"DataTable-module__no-content-image__BRKM5",noContentImage:Aa,"no-data-icon":"DataTable-module__no-data-icon__YhPDn",noDataIcon:ka,"no-content-message":"DataTable-module__no-content-message__lPhrr",noContentMessage:La,colorConnotationRed:Va,colorConnotationGreen:Fa,colorConnotationYellow:ja,colorConnotationBlue:Ba,colorConnotationBlack:Ha,"half-width":"DataTable-module__half-width__r7q0u",halfWidth:Oa,"third-width":"DataTable-module__third-width__hmaLB",thirdWidth:Ra,"full-width":"DataTable-module__full-width__3cFCz",fullWidth:Ma,"dynamic-height":"DataTable-module__dynamic-height__XH5fL",dynamicHeight:Ea,stacked:Ga,"panel-active":"DataTable-module__panel-active__AchO-",panelActive:$a},F=a=>Array.isArray(a),j={boldStatColumns:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,calculateColumnTotals:!1,hideAllColumnTitles:!1,hideFirstColumnTitle:!1,showBands:!0,topBorder:!0},N=({widgetData:a,noContentText:n="No data available",title:c,className:u="data-table-widget",widthPreference:P,dataSource:A="",isDynamicHeight:D=!1})=>{var re,se,de;const[W,Qe]=f.useState(0),[Q,Je]=f.useState(null),[J,Ke]=f.useState(!1),[i,Ze]=f.useState({}),[K,Xe]=f.useState(""),[ee,te]=f.useState(null),x=f.useCallback(()=>a!=null&&a.content?F(a.content)?a.content[W]:a.content:null,[a==null?void 0:a.content,W]),ae=f.useCallback((l,o,m)=>{var r;return(r=i==null?void 0:i.columnAlignments)!=null&&r[l]?i.columnAlignments[l]:o===m-1?"right":"left"},[i==null?void 0:i.columnAlignments]),et=l=>{switch(l){case"halfWidth":return"half-width";case"thirdWidth":return"third-width";case"fullWidthOnly":return"full-width";default:return"full-width"}},L=f.useCallback(()=>{const l=x();return l?v.shouldShowNoContentMessage(l):!0},[x]),V=f.useCallback(l=>{Je(l);const o=l.options?{...j,...l.options}:j;Ze(o);const m={positive:t["color-positive"],negative:t["color-negative"],warning:t["color-warning"],info:t["color-info"],none:t["color-none"]},b=o.columnTitleColorClass||"none";Xe(m[b]||""),l.columnTitles||(l.columnTitles=v.makeOwnColumnHeaders(l.listItems)),o.calculateColumnTotals?te(v.addNumberToColumnHeaders(l)):te(null)},[]),ne=f.useCallback(l=>{Qe(l)},[]);f.useEffect(()=>{const l=x(),o=L();Ke(o),!o&&l&&V(l)},[x,L,V]),f.useEffect(()=>{const l=x();l&&!L()&&V(l)},[W,x,L,V]);const le=l=>{if(l&&!(l.startsWith("http://")||l.startsWith("https://")))return X.error(`url strings must include http:// or https://, ${l} is invalid`),!1;window.open(l,"_self")},tt=(l,o,m,b,r)=>{const h=ae(m,b,r),p=[o?t["name-column"]:t["stat-column"],i!=null&&i.boldStatColumns&&!o?t["bold-stat-columns"]:"",t[`align-${h}`]].filter(Boolean).join(" ");return e.jsxs("td",{className:p,children:[e.jsx("div",{className:t["table-cell-title"],children:l.url?e.jsx("a",{href:l.url,onClick:d=>{d.preventDefault(),le(l.url)},children:l.title}):e.jsx("span",{children:l.title})}),l.text&&e.jsx("div",{className:t["table-cell-text"],children:l.text})]},m)},oe=l=>e.jsx("div",{children:e.jsx("table",{children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{className:l==="tabbed"?t["no-content-text-tabbed"]:t["no-content-text-non-tabbed"],children:e.jsx(Z,{customClassName:t["data-table-no-content"],noContentText:n,showImage:!D})})})})})}),ie=l=>{if(!Q)return oe(l);const o=Q.columnTitles,m=!(i!=null&&i.hideAllColumnTitles)&&o.length>0,b=o.length;return e.jsx("div",{className:t["data-table-wrapper"],children:e.jsxs("table",{className:m?t["adjust-for-headers"]:"",children:[m&&!J&&e.jsx("thead",{children:e.jsx("tr",{children:o.map((r,h)=>{const p=h===0,d=ae(r,h,b),g=[p?t["name-column"]:"",i!=null&&i.darkStatColumnTitles&&!K&&!p?t["dark-stat-column-titles"]:"",!p&&K?K:"",t[`align-${d}`]].filter(Boolean).join(" "),T=!p||!(i!=null&&i.hideFirstColumnTitle)?ee?ee[r]:r:"";return e.jsx("th",{className:g,children:e.jsx("div",{className:`${t["table-cell-title"]} ${t["table-header-div"]}`,title:T,children:T})},r)})})}),J&&e.jsx("tbody",{className:t["no-content-text"],children:e.jsx("tr",{children:e.jsx("td",{children:e.jsx(Z,{customClassName:t["data-table-no-content"],noContentText:n,showImage:!D})})})}),!J&&e.jsx("tbody",{className:`${t["data-table"]} ${t.scroll} ${i!=null&&i.topBorder?t["table-top-border"]:""}`,children:Q.listItems.map((r,h)=>e.jsx("tr",{className:i!=null&&i.showBands&&h%2===0?t["table-band"]:"",children:o.map((p,d)=>tt(r[p],d===0,p,d,b))},h))})]})})},at=()=>!(a==null?void 0:a.content).length||!F(a.content)?oe("non-tabbed"):a.content.map((o,m)=>{const b=m===W,r=o.options?{...j,...o.options}:j,h={positive:t["color-positive"],negative:t["color-negative"],warning:t["color-warning"],info:t["color-info"],none:t["color-none"]},p=r.columnTitleColorClass||"none",d=h[p]||"",g=o.columnTitles||v.makeOwnColumnHeaders(o.listItems),T=r.calculateColumnTotals?v.addNumberToColumnHeaders(o):null,I=v.shouldShowNoContentMessage(o),me=!r.hideAllColumnTitles&&g.length>0,ce=g.length,ue=(_,w,y)=>{var S;return(S=r.columnAlignments)!=null&&S[_]?r.columnAlignments[_]:w===y-1?"right":"left"};return e.jsx("div",{className:`${t["data-table-wrapper"]} ${b?t["panel-active"]:""}`.trim(),children:e.jsxs("table",{className:`${me?t["adjust-for-headers"]:""}`,children:[me&&!I&&e.jsx("thead",{children:e.jsx("tr",{children:g.map((_,w)=>{const y=w===0,S=ue(_,w,ce),C=[y?t["name-column"]:"",r.darkStatColumnTitles&&!d&&!y?t["dark-stat-column-titles"]:"",!y&&d?d:"",t[`align-${S}`]].filter(Boolean).join(" "),k=!y||!r.hideFirstColumnTitle?T?T[_]:_:"";return e.jsx("th",{className:C,children:e.jsx("div",{className:`${t["table-cell-title"]} ${t["table-header-div"]}`,title:k,children:k})},_)})})}),I&&e.jsx("tbody",{className:t["no-content-text"],children:e.jsx("tr",{children:e.jsx("td",{children:e.jsx(Z,{customClassName:t["data-table-no-content"],noContentText:n,showImage:!D})})})}),!I&&e.jsx("tbody",{className:`${t["data-table"]} ${t.scroll} ${r.topBorder?t["table-top-border"]:""}`,children:o.listItems.map((_,w)=>e.jsx("tr",{className:r.showBands&&w%2===0?t["table-band"]:"",children:g.map((y,S)=>{const C=_[y],k=S===0,ot=ue(y,S,ce),it=[k?t["name-column"]:t["stat-column"],r.boldStatColumns&&!k?t["bold-stat-columns"]:"",t[`align-${ot}`]].filter(Boolean).join(" ");return e.jsxs("td",{className:it,children:[e.jsx("div",{className:t["table-cell-title"],children:C.url?e.jsx("a",{href:C.url,onClick:rt=>{rt.preventDefault(),le(C.url)},children:C.title}):e.jsx("span",{children:C.title})}),C.text&&e.jsx("div",{className:t["table-cell-text"],children:C.text})]},y)})},w))})]})},m)}),nt=()=>{const l=x();return l!=null&&l.diveLink?e.jsx(ct,{diveLink:l.diveLink,className:"dive-link-data-table",dataTestId:"data-table-dive-link"}):null},lt=()=>{var r,h,p;if(!(a!=null&&a.content)||!F(a.content))return null;const l=a.content,o=l.map((d,g)=>{var I;const T=((I=d==null?void 0:d.listItems)==null?void 0:I.length)||0;return{label:d.title||`Option ${g+1}`,value:d.title||`option-${g}`,count:T}}),m=((r=l[W])==null?void 0:r.title)||((h=o[0])==null?void 0:h.value)||"",b=o.some(d=>d.count>0);return e.jsx(mt,{className:t["data-table-dropdown"],label:((p=a.contentArrayOptions)==null?void 0:p.contentDropdownLabel)||"Select",options:o,selectedValue:m,showCount:b,onValueChange:d=>{const g=l.findIndex(T=>(T.title||`option-${l.indexOf(T)}`)===d);g!==-1&&ne(g)}})};return e.jsxs("div",{className:`
        ${t["data-table-widget"]}
        ${u}
        ${t["cmp-data-table"]}
        ${t[et(P)]}
        ${D?t["dynamic-height"]:""}`,children:[e.jsxs("div",{className:`${t["widget-header"]}`,children:[A&&e.jsx("div",{className:t["widget-data-source-row"],children:e.jsx("h4",{className:t["widget-data-source"],children:A})}),e.jsxs("div",{children:[c&&e.jsx("h3",{className:t["widget-title"],children:c}),(a==null?void 0:a.subtitle)&&e.jsx("p",{className:`${t["widget-subtitle"]} ${t["text-muted"]}`,children:a.subtitle})]})]}),e.jsx("div",{className:`${t["widget-main-content"]}`,children:F(a==null?void 0:a.content)?e.jsxs("div",{className:`${t["tabbed-content"]} ${t["has-tabs"]} ${((re=a==null?void 0:a.contentArrayOptions)==null?void 0:re.toggleType)==="dropdown"?t["has-dropdown"]:""}`,children:[((se=a==null?void 0:a.contentArrayOptions)==null?void 0:se.toggleType)==="dropdown"?e.jsx("div",{className:t["dropdown-navigation"],children:lt()}):e.jsx("ul",{className:`${t["tab-navigation"]}`,role:"tablist",children:a==null?void 0:a.content.map((l,o)=>{var b;const m=((b=l.listItems)==null?void 0:b.length)||0;return e.jsx(st,{label:l.title||`Tab ${o+1}`,isActive:o===W,onClick:()=>ne(o),showCount:m>0,count:m},`tab-${l.title||"untitled"}-${o}`)})}),P===dt.fullWidthOnly?e.jsx("div",{className:`${t["table-container"]} ${(de=a==null?void 0:a.content)!=null&&de.length?t.stacked:""}`,children:at()}):e.jsx("div",{className:t["table-container"],children:ie("tabbed")})]}):e.jsx("div",{className:t["single-content"],children:e.jsx("div",{className:t["table-container"],children:ie("non-tabbed")})})}),e.jsx("div",{className:t["dive-link-container"],children:nt()})]})};N.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{widgetData:{required:!0,tsType:{name:"IDataTableConfig"},description:""},noContentText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No data available'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'data-table-widget'",computed:!1}},widthPreference:{required:!1,tsType:{name:"union",raw:"'thirdWidth' | 'halfWidth' | 'fullWidthOnly'",elements:[{name:"literal",value:"'thirdWidth'"},{name:"literal",value:"'halfWidth'"},{name:"literal",value:"'fullWidthOnly'"}]},description:""},dataSource:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},isDynamicHeight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const za={overview:`
The DataTable component is a flexible and configurable table widget that displays tabular data with various styling and organizational options. It supports single tables, tabbed content, dropdown navigation, and many customization features like column totals, row banding, and item count indicators.

This component is a React migration of the original AngularJS \`cmp-data-table\` component, maintaining the same functionality and API while providing modern React patterns and TypeScript support.

## Key Features

- **Single and Multi-Content Support**: Display one table or multiple tables with tabs/dropdown navigation
- **Count Indicators**: Show item counts in tabs and dropdown options for better data visibility
- **Flexible Column Configuration**: Auto-generate columns from data or specify custom column titles
- **Column Alignment Control**: Customize alignment for each column (left, center, right)
- **Column Totals**: Automatically calculate and display totals for numeric columns
- **Link Support**: Clickable cells with URL validation and dive links for detailed views
- **Visual Customization**: Row banding, borders, column styling, and color themes
- **No Content States**: Built-in empty state handling with customizable messages
- **Accessibility**: Proper semantic HTML structure and keyboard navigation
- **Responsive Design**: Scrollable content that adapts to container sizes

## Data Structure

The component expects data in a specific format where each cell contains:
- \`title\`: The main display value (string or number)
- \`text\`: Optional secondary text displayed below the title
- \`url\`: Optional URL to make the cell clickable
- \`isBold\`: Optional flag to make text bold

## Widget Data Interface Structure

### IDataTableConfig
\`\`\`typescript
interface IDataTableConfig {
  title?: string;                    // Optional title for the widget
  subtitle?: string;                 // Optional subtitle description
  content: IDataTableContent | IDataTableContent[];  // Single table or array of tables
  masterButtonConfig?: {             // Optional action button configuration
    text: string;
    url?: string;
    clickAction?: string;
    class?: string;
  };
  contentArrayOptions?: {            // Navigation options for multiple content
    contentDropdownLabel?: string;   // Label for dropdown selector
    toggleType?: 'tabs' | 'dropdown'; // Navigation type
  };
}
\`\`\`

### IDataTableContent
\`\`\`typescript
interface IDataTableContent {
  title?: string;                    // Tab/dropdown option title
  subtitle?: string;                 // Optional subtitle
  listItems: IDataTableListItem[];  // Array of table rows
  columnTitles: string[];            // Column header labels
  diveLink?: {                       // Optional action link
    url: string;
    text: string;
  };
  options?: IDataTableOptions;       // Styling and behavior options
}
\`\`\`

### IDataTableListItem
\`\`\`typescript
interface IDataTableListItem {
  [columnKey: string]: {             // Dynamic column keys
    title: string | number;          // Primary display value
    text?: string | number;          // Optional secondary text
    url?: string;                    // Optional clickable URL
    isBold?: boolean;                // Optional bold styling
  };
}
\`\`\`

### IDataTableOptions
\`\`\`typescript
interface IDataTableOptions {
  boldStatColumns?: boolean;         // Make numeric columns bold
  columnTitleColorClass?: ColorCategoriesEnum; // Header color theme
  darkStatColumnTitles?: boolean;    // Dark background for headers
  calculateColumnTotals?: boolean;   // Auto-calculate column totals
  hideAllColumnTitles?: boolean;     // Hide all column headers
  hideFirstColumnTitle?: boolean;    // Hide first column header only
  showBands?: boolean;               // Alternating row colors
  topBorder?: boolean;               // Top border on table
  columnAlignments?: Record<string, 'left' | 'right' | 'center'>; // Custom column alignment
}
\`\`\`

**columnAlignments Field Details:**
- **Type**: \`Record<string, ColumnAlignment>\` where \`ColumnAlignment = 'left' | 'right' | 'center'\`
- **Optional**: Yes (provides sensible defaults when not specified)
- **Purpose**: Control text alignment for specific columns
- **Keys**: Should match column names defined in \`columnTitles\` array
- **Values**: Can be \`'left'\`, \`'right'\`, or \`'center'\`
- **Default Behavior** (when not provided):
  - First column: left-aligned
  - Middle columns: left-aligned
  - Last column: right-aligned

**Example Usage**:
\`\`\`typescript
const options: IDataTableOptions = {
  columnAlignments: {
    'employeeName': 'left',        // Align employee names to the left
    'Not Started': 'center',       // Center-align the "Not Started" count
    'In Progress': 'center',       // Center-align the "In Progress" count
    'Completed': 'right',          // Right-align the "Completed" count
  } as const,
  showBands: true,
  topBorder: false,
};
\`\`\`

## Navigation Options

### Tabs Navigation (Default)
When multiple content items are provided, the component defaults to tab navigation with count indicators, allowing users to switch between different data sets while seeing the number of items in each tab.

### Dropdown Navigation
Set \`contentArrayOptions.toggleType\` to \`'dropdown'\` to use a dropdown selector instead of tabs. The dropdown also shows count indicators for each option and displays the selected value with its count.

## Count Display Logic
- **Show Counts**: When any tab/dropdown option has items (count > 0)
- **Hide Counts**: Only when all options have zero items
- **Format**: "Label (count)" - counts only appear for options with data

## Validation

The component automatically validates URLs to ensure they include proper protocols (http:// or https://). Invalid URLs will trigger warning messages and display an error notification.
  `},s={full:()=>({tagName:"cmp-data-table",content:[{listItems:[{employeeName:{title:"Brad Benninger"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alissa Hartenbaum"},"Not Started":{title:2},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"ramya oldemailmuthukrishnan"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alex Algarme"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Fredy Whatley"},"Not Started":{title:1},"In Progress":{title:1},Completed:{title:0}},{employeeName:{title:"IDM62 IDM62"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Ramya Muthukrishnan"},"Not Started":{title:4},"In Progress":{title:1},Completed:{title:1}},{employeeName:{title:"PlatformTester123 Tester123"},"Not Started":{title:9},"In Progress":{title:0},Completed:{title:0}}],title:"Training Plans",columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,calculateColumnTotals:!0,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"center","In Progress":"center",Completed:"right"}}},{listItems:[{employeeName:{title:"Brad Benninger"},"Not Started":{title:4},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alissa Hartenbaum"},"Not Started":{title:6},"In Progress":{title:1},Completed:{title:1}},{employeeName:{title:"Tim Shortt"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}}],title:"Calibration Plans",columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"center","In Progress":"center",Completed:"right"}}}],subtitle:"Fully populated, no scrolling for 2nd tab, column totals"}),oneTab:()=>({tagName:"cmp-data-table",content:{listItems:[{employeeName:{title:"Brad Benninger"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alissa Hartenbaum"},"Not Started":{title:2},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"ramya oldemailmuthukrishnan"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alex Algarme"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Fredy Whatley"},"Not Started":{title:1},"In Progress":{title:1},Completed:{title:0}},{employeeName:{title:"IDM62 IDM62"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Ramya Muthukrishnan"},"Not Started":{title:4},"In Progress":{title:1},Completed:{title:1}},{employeeName:{title:"PlatformTester123 Tester123"},"Not Started":{title:9},"In Progress":{title:0},Completed:{title:0}}],columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"center","In Progress":"center",Completed:"right"}}},subtitle:"Only one tab available, no top border"}),tabbed:()=>({tagName:"cmp-data-table",content:[{title:"With Scroll",listItems:[{employeeName:{title:"Brad Benninger"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alissa Hartenbaum"},"Not Started":{title:2},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"ramya oldemailmuthukrishnan"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alex Algarme"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Fredy Whatley"},"Not Started":{title:1},"In Progress":{title:1},Completed:{title:0}},{employeeName:{title:"IDM62 IDM62"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Ramya Muthukrishnan"},"Not Started":{title:4},"In Progress":{title:1},Completed:{title:1}}],columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"center","In Progress":"center",Completed:"right"}}},{title:"No Scroll",listItems:[{employeeName:{title:"Fredy Whatley"},"Not Started":{title:1},"In Progress":{title:1},Completed:{title:0}},{employeeName:{title:"IDM62 IDM62"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Ramya Muthukrishnan"},"Not Started":{title:4},"In Progress":{title:1},Completed:{title:1}}],columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"left","In Progress":"left",Completed:"right"}}},{title:"No Content",listItems:[],columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"left","In Progress":"left",Completed:"right"}}}],subtitle:"Tabbed content items"}),dropdown:()=>({tagName:"cmp-data-table",content:[{title:"With Scroll",listItems:[{employeeName:{title:"Brad Benninger"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alissa Hartenbaum"},"Not Started":{title:2},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"ramya oldemailmuthukrishnan"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alex Algarme"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Fredy Whatley"},"Not Started":{title:1},"In Progress":{title:1},Completed:{title:0}},{employeeName:{title:"IDM62 IDM62"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Ramya Muthukrishnan"},"Not Started":{title:4},"In Progress":{title:1},Completed:{title:1}}],columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"left","In Progress":"left",Completed:"right"}}},{title:"No Scroll",listItems:[{employeeName:{title:"Fredy Whatley"},"Not Started":{title:1},"In Progress":{title:1},Completed:{title:0}},{employeeName:{title:"IDM62 IDM62"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Ramya Muthukrishnan"},"Not Started":{title:4},"In Progress":{title:1},Completed:{title:1}}],columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"left","In Progress":"left",Completed:"right"}}},{title:"No Content",listItems:[],columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"left","In Progress":"left",Completed:"right"}}}],subtitle:"Multiple dropdown items",contentArrayOptions:{toggleType:"dropdown",contentDropdownLabel:"Select"}}),miscToogles:()=>({tagName:"cmp-data-table",content:{columnTitles:["BUILDING","% COMPLETED"],listItems:[{BUILDING:{title:"No building assigned"},"% COMPLETED":{title:"0%"}},{BUILDING:{title:"building1"},"% COMPLETED":{title:"0%"}},{BUILDING:{title:"DO"},"% COMPLETED":{title:"4%"}},{BUILDING:{title:"Teachscape"},"% COMPLETED":{title:"12%"}}],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!1,hideAllColumnTitles:!1,showBands:!1,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!0,boldStatColumns:!0,columnAlignments:{BUILDING:"left","% COMPLETED":"right"}}},subtitle:"Hidden row bands, no top border, bold stats column"}),miscToggles2:()=>({tagName:"cmp-data-table",content:{columnTitles:["EMPLOYEE","ACTIVITIES","HRS/CREDITS"],listItems:[{EMPLOYEE:{title:"Greg Robinson"},ACTIVITIES:{title:2},"HRS/CREDITS":{title:27}},{EMPLOYEE:{title:"Georgia Robin"},ACTIVITIES:{title:6},"HRS/CREDITS":{title:23}}],diveLink:{url:"https://pdmsawsstage.mylearningplan.com/summative-report",text:"View District Admin"},options:{hideFirstColumnTitle:!1,hideAllColumnTitles:!1,showBands:!0,topBorder:!0,darkStatColumnTitles:!0,boldStatColumns:!0,columnTitleColorClass:"none",columnAlignments:{EMPLOYEE:"left",ACTIVITIES:"center","HRS/CREDITS":"right"}}},subtitle:"Visible row bands, Has top border, bold stats column, custom center alignment"}),miscToggles3:()=>({tagName:"cmp-data-table",content:{columnTitles:["OVERALL","67% Complete"],listItems:[{OVERALL:{title:"Kourtney Abbruzzese"},"67% Complete":{title:"1 of 3 (33%)"}},{OVERALL:{title:"Alicia Abdul"},"67% Complete":{title:"2 of 2 (100%)"}},{OVERALL:{title:"Dawn Marie Abrams"},"67% Complete":{title:"1 of 3 (33%)"}},{OVERALL:{title:"Aimee Ackley"},"67% Complete":{title:"1 of 4 (25%)"}},{OVERALL:{title:"Caroline Adam"},"67% Complete":{title:"3 of 3 (100%)"}},{OVERALL:{title:"Chrislene Adams"},"67% Complete":{title:"3 of 3 (100%)"}},{OVERALL:{title:"Stefanie Adler"},"67% Complete":{title:"3 of 3 (100%)"}},{OVERALL:{title:"Francesca Aiello"},"67% Complete":{title:"2 of 3 (66%)"}}],diveLink:{url:"undefined/reports/summative-report",text:"Evaluation Admin View"},options:{hideFirstColumnTitle:!1,hideAllColumnTitles:!1,showBands:!0,topBorder:!0,darkStatColumnTitles:!0,boldStatColumns:!0,columnTitleColorClass:"positive",columnAlignments:{OVERALL:"left","67% Complete":"right"}}},subtitle:'Uses "positive" color class'}),noContent:()=>({tagName:"cmp-data-table",content:[],subtitle:"content[] is empty"}),noListItems:()=>({tagName:"cmp-data-table",content:{columnTitles:["Column 1","Column 2","Column 3"],diveLink:{url:"https://test.mylearningplan.com/test",text:"View Report"},listItems:[],options:{hideFirstColumnTitle:!1,hideAllColumnTitles:!1,showBands:!0,topBorder:!0,columnAlignments:{Column1:"left",Column2:"center",Column3:"right"}}},subtitle:"has content[] and columnTitles[] but listItems[] is empty"}),singleDropdown:()=>({tagName:"cmp-data-table",content:[{title:"Single Dropdown",listItems:[{employeeName:{title:"Brad Benninger"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alissa Hartenbaum"},"Not Started":{title:2},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"ramya oldemailmuthukrishnan"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Alex Algarme"},"Not Started":{title:3},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Fredy Whatley"},"Not Started":{title:1},"In Progress":{title:1},Completed:{title:0}},{employeeName:{title:"IDM62 IDM62"},"Not Started":{title:1},"In Progress":{title:0},Completed:{title:0}},{employeeName:{title:"Ramya Muthukrishnan"},"Not Started":{title:4},"In Progress":{title:1},Completed:{title:1}}],columnTitles:["employeeName","Not Started","In Progress","Completed"],diveLink:{url:"https://elevate.flqa.net/reports/summative-report",text:"View Report"},options:{hideFirstColumnTitle:!0,showBands:!0,topBorder:!1,columnTitleColorClass:"none",darkStatColumnTitles:!1,boldStatColumns:!1,columnAlignments:{employeeName:"left","Not Started":"left","In Progress":"left",Completed:"right"}}}],subtitle:"Multiple dropdown items",contentArrayOptions:{toggleType:"dropdown",contentDropdownLabel:"Select"}}),dataTableCustomCenterAlignment:()=>({subtitle:"",content:{columnTitles:["Title","Hours","Credits","Completion Date"],diveLink:{url:"#",text:"View Portfolio",isExternal:!0},listItems:[{Title:{title:"Winter Wonderings"},Hours:{title:"3.0"},Credits:{title:"3.0"},"Completion Date":{title:"July 13, 2020"}},{Title:{title:"Winter Wonderings"},Hours:{title:"3.0"},Credits:{title:"3.0"},"Completion Date":{title:"Dec 13, 2020"}},{Title:{title:"Setting Ourselves Up for Success"},Hours:{title:"5.0"},Credits:{title:"6.0"},"Completion Date":{title:"July 13, 2020"}},{Title:{title:"Understanding Bullying in the Classroom"},Hours:{title:"1.0"},Credits:{title:"0.5"},"Completion Date":{title:"July 13, 2020"}}],options:{showBands:!0,columnAlignments:{Title:"left",Hours:"center",Credits:"center","Completion Date":"right"}}},tagName:"cmp-data-table"}),dataTableDefaultAlignment:()=>({subtitle:"09/01/2023 - 07/30/2024",content:{diveLink:{url:"#",text:"View Evaluation History",isExternal:!0},listItems:[{Component:{title:"First Announced Observation"},Form:{title:"Pre-Observation Planning Form that Wraps for Demonstration"},"Submitted By":{title:"Joanna Smithvilleton"},"Date Finalized":{title:"Sep 20, 2025"}},{Component:{title:"First Announced Observation"},Form:{title:"Pre-Observation Planning Form 2"},"Submitted By":{title:"Leona Arvida"},"Date Finalized":{title:"Sep 23, 2025"}},{Component:{title:"First Announced Observation"},Form:{title:"Announced Observation Form"},"Submitted By":{title:"Leona Arvida"},"Date Finalized":{title:"Sep 27, 2025"}},{Component:{title:"Student Growth Objective"},Form:{title:"Placeholder Name"},"Submitted By":{title:"Yasser A."},"Date Finalized":{title:"Sep 23, 2025"}}],options:{showBands:!0},columnTitles:["Component","Form","Submitted By","Date Finalized"]},tagName:"cmp-data-table"})},en={title:"Components/DataTable",component:N,parameters:{layout:"centered",docs:{description:{component:`${za.overview}

### Column Alignment Feature

The DataTable now supports custom column alignment through the \`columnAlignments\` option. You can specify 'left', 'right', or 'center' alignment for each column.

**Default Behavior:**
- First column: left-aligned
- Middle columns: left-aligned
- Last column: right-aligned

**Custom Alignment:**
Pass a \`columnAlignments\` object in the options to override defaults for specific columns.

### isDynamicHeight Prop

When \`isDynamicHeight\` is set to \`true\`, the component height adjusts dynamically to fit the tallest tab's content rather than using a fixed height. This prevents the container from resizing when switching between tabs. This feature only applies to full-width (\`fullWidthOnly\`) multi-tab configurations.`}}},tags:["autodocs"],argTypes:{dataSource:{control:"text",description:"Data source label displayed above the widget title",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},title:{control:"text",description:"Widget title displayed in header"},widgetData:{control:{type:"object"},description:"Primary data for the component: { content: [...], contentArrayOptions: {...} }"},noContentText:{control:"text",description:"Message shown when no content is available",table:{defaultValue:{summary:'"No data available"'}}},widthPreference:{control:{type:"select"},options:["fullWidthOnly","halfWidth","thirdWidth"],description:"Controls widget width for responsive layouts"},className:{control:"text",description:"Additional CSS class for custom styling",table:{defaultValue:{summary:'"data-table-widget"'}}},isDynamicHeight:{control:"boolean",description:"When true, container height adjusts dynamically to the tallest tab content (full-width multi-tab only)"}}},B={args:{dataSource:"Professional Growth",title:"Full Data Table",widgetData:s.full(),noContentText:"No content Text",widthPreference:"halfWidth",isDynamicHeight:!0}},H={name:"Data Table - (Custom Center Alignment)",args:{dataSource:"Professional Growth",title:"Completed Activities",widgetData:s.dataTableCustomCenterAlignment(),noContentText:"No content Text",widthPreference:"halfWidth",isDynamicHeight:!0},parameters:{docs:{description:{story:"Demonstrates custom column alignment with numeric columns (Hours, Credits) centered for better readability."}}}},O={name:"Data Table - (Default Alignment)",args:{dataSource:"Professional Growth",title:"Last Completed Evaluation Cycle",widgetData:s.dataTableDefaultAlignment(),noContentText:"No content Text",widthPreference:"halfWidth",isDynamicHeight:!0},parameters:{docs:{description:{story:"Uses default alignment behavior: first column left, middle columns left, last column right."}}}},R={args:{dataSource:"Professional Growth",title:"Data Table",widgetData:s.oneTab(),noContentText:"No data available",widthPreference:"halfWidth",isDynamicHeight:!0}},M={args:{dataSource:"Professional Growth",title:"Tabbed Data Table",widgetData:s.tabbed(),noContentText:"No data available",widthPreference:"halfWidth",isDynamicHeight:!0}},E={args:{leftDataSource:"Professional Growth",leftTitle:"Tabbed Data Table",leftWidgetData:s.tabbed(),leftNoContentText:"No data available",leftWidthPreference:"halfWidth",leftClassName:"custom-half-width",rightDataSource:"Professional Growth",rightTitle:"Data Table",rightWidgetData:s.oneTab(),rightNoContentText:"No data available",rightWidthPreference:"halfWidth",rightClassName:"custom-half-width"},argTypes:{dataSource:{table:{disable:!0}},title:{table:{disable:!0}},widgetData:{table:{disable:!0}},noContentText:{table:{disable:!0}},widthPreference:{table:{disable:!0}},className:{table:{disable:!0}},leftDataSource:{name:"🟦 leftDataSource",control:"text",description:" ",table:{category:"Left Table",type:{summary:null},defaultValue:{summary:null}}},leftTitle:{name:"🟦 leftTitle",control:"text",description:" ",table:{category:"Left Table",type:{summary:null},defaultValue:{summary:null}}},leftWidgetData:{name:"🟦 leftWidgetData",control:{type:"object"},description:" ",table:{category:"Left Table",type:{summary:null},defaultValue:{summary:null}}},leftNoContentText:{name:"🟦 leftNoContentText",control:"text",description:" ",table:{category:"Left Table",type:{summary:null},defaultValue:{summary:null}}},leftWidthPreference:{name:"🟦 leftWidthPreference",control:{type:"select"},options:["fullWidthOnly","halfWidth","thirdWidth"],description:" ",table:{category:"Left Table",type:{summary:null},defaultValue:{summary:null}}},leftClassName:{name:"🟦 leftClassName",control:"text",description:" ",table:{category:"Left Table",type:{summary:null},defaultValue:{summary:null}}},rightDataSource:{name:"🟩 rightDataSource",control:"text",description:" ",table:{category:"Right Table",type:{summary:null},defaultValue:{summary:null}}},rightTitle:{name:"🟩 rightTitle",control:"text",description:" ",table:{category:"Right Table",type:{summary:null},defaultValue:{summary:null}}},rightWidgetData:{name:"🟩 rightWidgetData",control:{type:"object"},description:" ",table:{category:"Right Table",type:{summary:null},defaultValue:{summary:null}}},rightNoContentText:{name:"🟩 rightNoContentText",control:"text",description:" ",table:{category:"Right Table",type:{summary:null},defaultValue:{summary:null}}},rightWidthPreference:{name:"🟩 rightWidthPreference",control:{type:"select"},options:["fullWidthOnly","halfWidth","thirdWidth"],description:" ",table:{category:"Right Table",type:{summary:null},defaultValue:{summary:null}}},rightClassName:{name:"🟩 rightClassName",control:"text",description:" ",table:{category:"Right Table",type:{summary:null},defaultValue:{summary:null}}}},render:a=>{const n=a;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
            .custom-half-width {
              width: calc(50% - 20px) !important;
              position: relative;
              display: flex;
              flex-direction: column;
              border: 1px solid #c0c8cf;
              border-radius: 3px;
              background-color: #fff;
              padding: 20px;
              float: left;
            }
          `}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(N,{widgetData:n.leftWidgetData||s.tabbed(),title:n.leftTitle||"Tabbed Data Table",noContentText:n.leftNoContentText||"No data available",widthPreference:n.leftWidthPreference||"halfWidth",className:n.leftClassName||"custom-half-width",dataSource:n.leftDataSource}),e.jsx(N,{widgetData:n.rightWidgetData||s.oneTab(),title:n.rightTitle||"Data Table",noContentText:n.rightNoContentText||"No data available",widthPreference:n.rightWidthPreference||"halfWidth",className:n.rightClassName||"custom-half-width",dataSource:n.rightDataSource})]})]})},parameters:{controls:{expanded:!0}}},G={args:{dataSource:"Professional Growth",title:"Dropdown Data Table",widgetData:s.dropdown(),noContentText:"No data available",widthPreference:"halfWidth",isDynamicHeight:!0}},$={args:{dataSource:"Professional Growth",title:"Full Width Data Table",widgetData:s.miscToggles3(),noContentText:"No data available",widthPreference:"fullWidthOnly",isDynamicHeight:!0}},z={args:{dataSource:"Professional Growth",title:"Data Table",widgetData:s.noContent(),noContentText:"No data to display",widthPreference:"halfWidth",isDynamicHeight:!0}},q={args:{dataSource:"Professional Growth",title:"Data Table",widgetData:s.noListItems(),noContentText:"No data available",widthPreference:"fullWidthOnly",isDynamicHeight:!0}},Y={args:{firstDataSource:"Professional Growth",firstTitle:"Single Dropdown Table",firstWidgetData:s.singleDropdown(),firstNoContentText:"No dropdown data",firstWidthPreference:"halfWidth",firstClassName:"custom-half-width",firstIsDynamicHeight:!0,secondDataSource:"Professional Growth",secondTitle:"Single Tab Table",secondWidgetData:s.oneTab(),secondNoContentText:"No tab data",secondWidthPreference:"halfWidth",secondClassName:"custom-half-width",secondIsDynamicHeight:!0},argTypes:{dataSource:{table:{disable:!0}},title:{table:{disable:!0}},widgetData:{table:{disable:!0}},noContentText:{table:{disable:!0}},widthPreference:{table:{disable:!0}},className:{table:{disable:!0}},firstDataSource:{name:"🟦 firstTableDataSource",control:"text",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstWidgetData:{name:"🟦 firstTableWidgetData",control:{type:"object"},description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstTitle:{name:"🟦 firstTableTitle",control:"text",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstNoContentText:{name:"🟦 firstTableNoContentText",control:"text",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstWidthPreference:{name:"🟦 firstTableWidthPreference",control:{type:"select"},options:["fullWidthOnly","halfWidth","thirdWidth"],description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstClassName:{name:"🟦 firstTableClassName",control:"text",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstIsDynamicHeight:{name:"🟦 firstTableIsDynamicHeight",control:"boolean",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},secondDataSource:{name:"🟩 secondTableDataSource",control:"text",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondWidgetData:{name:"🟩 secondTableWidgetData",control:{type:"object"},description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondTitle:{name:"🟩 secondTableTitle",control:"text",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondNoContentText:{name:"🟩 secondTableNoContentText",control:"text",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondWidthPreference:{name:"🟩 secondTableWidthPreference",control:{type:"select"},options:["fullWidthOnly","halfWidth","thirdWidth"],description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondClassName:{name:"🟩 secondTableClassName",control:"text",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondIsDynamicHeight:{name:"🟩 secondTableIsDynamicHeight",control:"boolean",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}}},render:a=>{const n=a;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
            .custom-half-width {
              width: calc(50% - 20px) !important;
              position: relative;
              display: flex;
              flex-direction: column;
              border: 1px solid #c0c8cf;
              border-radius: 3px;
              background-color: #fff;
              padding: 20px;
              float: left;
            }
          `}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(N,{dataSource:n.firstDataSource,widgetData:n.firstWidgetData||s.singleDropdown(),title:n.firstTitle||"Single Dropdown Table",noContentText:n.firstNoContentText||"No dropdown data",widthPreference:n.firstWidthPreference||"halfWidth",className:n.firstClassName||"custom-half-width",isDynamicHeight:n.firstIsDynamicHeight}),e.jsx(N,{dataSource:n.secondDataSource,widgetData:n.secondWidgetData||s.oneTab(),title:n.secondTitle||"Single Tab Table",noContentText:n.secondNoContentText||"No tab data",widthPreference:n.secondWidthPreference||"halfWidth",className:n.secondClassName||"custom-half-width",isDynamicHeight:n.secondIsDynamicHeight})]})]})},parameters:{controls:{expanded:!0}}},U={name:"Two Tables - Custom Center Alignment Demo",args:{firstDataSource:"Professional Growth",firstTitle:"Building Completion Table",firstWidgetData:s.miscToogles(),firstNoContentText:"No building data",firstWidthPreference:"halfWidth",firstClassName:"custom-half-width",firstIsDynamicHeight:!0,secondDataSource:"Professional Growth",secondTitle:"Employee Activities Table",secondWidgetData:s.miscToggles2(),secondNoContentText:"No employee data",secondWidthPreference:"halfWidth",secondClassName:"custom-half-width",secondIsDynamicHeight:!0},argTypes:{dataSource:{table:{disable:!0}},title:{table:{disable:!0}},widgetData:{table:{disable:!0}},noContentText:{table:{disable:!0}},widthPreference:{table:{disable:!0}},className:{table:{disable:!0}},firstDataSource:{name:"🟦 firstTableDataSource",control:"text",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstWidgetData:{name:"🟦 firstTableWidgetData",control:{type:"object"},description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstTitle:{name:"🟦 firstTableTitle",control:"text",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstNoContentText:{name:"🟦 firstTableNoContentText",control:"text",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstWidthPreference:{name:"🟦 firstTableWidthPreference",control:{type:"select"},options:["fullWidthOnly","halfWidth","thirdWidth"],description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstClassName:{name:"🟦 firstTableClassName",control:"text",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},firstIsDynamicHeight:{name:"🟦 firstTableIsDynamicHeight",control:"boolean",description:" ",table:{category:"First Table",type:{summary:null},defaultValue:{summary:null}}},secondDataSource:{name:"🟩 secondTableDataSource",control:"text",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondWidgetData:{name:"🟩 secondTableWidgetData",control:{type:"object"},description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondTitle:{name:"🟩 secondTableTitle",control:"text",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondNoContentText:{name:"🟩 secondTableNoContentText",control:"text",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondWidthPreference:{name:"🟩 secondTableWidthPreference",control:{type:"select"},options:["fullWidthOnly","halfWidth","thirdWidth"],description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondClassName:{name:"🟩 secondTableClassName",control:"text",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}},secondIsDynamicHeight:{name:"🟩 secondTableIsDynamicHeight",control:"boolean",description:" ",table:{category:"Second Table",type:{summary:null},defaultValue:{summary:null}}}},render:a=>{const n=a;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
            .custom-half-width {
              width: calc(50% - 20px) !important;
              position: relative;
              display: flex;
              flex-direction: column;
              border: 1px solid #c0c8cf;
              border-radius: 3px;
              background-color: #fff;
              padding: 20px;
              float: left;
            }
          `}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(N,{dataSource:n.firstDataSource,widgetData:n.firstWidgetData||s.miscToogles(),title:n.firstTitle||"Building Completion Table",noContentText:n.firstNoContentText||"No building data",widthPreference:n.firstWidthPreference||"halfWidth",className:n.firstClassName||"custom-half-width",isDynamicHeight:n.firstIsDynamicHeight}),e.jsx(N,{dataSource:n.secondDataSource,widgetData:n.secondWidgetData||s.miscToggles2(),title:n.secondTitle||"Employee Activities Table",noContentText:n.secondNoContentText||"No employee data",widthPreference:n.secondWidthPreference||"halfWidth",className:n.secondClassName||"custom-half-width",isDynamicHeight:n.secondIsDynamicHeight})]})]})},parameters:{controls:{expanded:!0}}};var be,pe,fe;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    dataSource: 'Professional Growth',
    title: 'Full Data Table',
    widgetData: dataTableFixtures.full(),
    noContentText: 'No content Text',
    widthPreference: 'halfWidth',
    isDynamicHeight: true
  }
}`,...(fe=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var he,ge,Te;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Data Table - (Custom Center Alignment)',
  args: {
    dataSource: 'Professional Growth',
    title: 'Completed Activities',
    widgetData: dataTableFixtures.dataTableCustomCenterAlignment(),
    noContentText: 'No content Text',
    widthPreference: 'halfWidth',
    isDynamicHeight: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom column alignment with numeric columns (Hours, Credits) centered for better readability.'
      }
    }
  }
}`,...(Te=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:Te.source}}};var ye,_e,Ce;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Data Table - (Default Alignment)',
  args: {
    dataSource: 'Professional Growth',
    title: 'Last Completed Evaluation Cycle',
    widgetData: dataTableFixtures.dataTableDefaultAlignment(),
    noContentText: 'No content Text',
    widthPreference: 'halfWidth',
    isDynamicHeight: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses default alignment behavior: first column left, middle columns left, last column right.'
      }
    }
  }
}`,...(Ce=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var De,Ne,xe;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    dataSource: 'Professional Growth',
    title: 'Data Table',
    widgetData: dataTableFixtures.oneTab(),
    noContentText: 'No data available',
    widthPreference: 'halfWidth',
    isDynamicHeight: true
  }
}`,...(xe=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:xe.source}}};var we,Se,ve;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    dataSource: 'Professional Growth',
    title: 'Tabbed Data Table',
    widgetData: dataTableFixtures.tabbed(),
    noContentText: 'No data available',
    widthPreference: 'halfWidth',
    isDynamicHeight: true
  }
}`,...(ve=(Se=M.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var We,Ie,Pe;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    leftDataSource: 'Professional Growth',
    leftTitle: 'Tabbed Data Table',
    leftWidgetData: dataTableFixtures.tabbed(),
    leftNoContentText: 'No data available',
    leftWidthPreference: 'halfWidth',
    leftClassName: 'custom-half-width',
    // Right table args - these need to be in args to show up in controls
    rightDataSource: 'Professional Growth',
    rightTitle: 'Data Table',
    rightWidgetData: dataTableFixtures.oneTab(),
    rightNoContentText: 'No data available',
    rightWidthPreference: 'halfWidth',
    rightClassName: 'custom-half-width'
  } as any,
  argTypes: {
    // Disable ALL inherited controls from meta
    dataSource: {
      table: {
        disable: true
      }
    },
    title: {
      table: {
        disable: true
      }
    },
    widgetData: {
      table: {
        disable: true
      }
    },
    noContentText: {
      table: {
        disable: true
      }
    },
    widthPreference: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    // Left table props - define fresh with no column data
    leftDataSource: {
      name: '🟦 leftDataSource',
      control: 'text',
      description: ' ',
      table: {
        category: 'Left Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    leftTitle: {
      name: '🟦 leftTitle',
      control: 'text',
      description: ' ',
      table: {
        category: 'Left Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    leftWidgetData: {
      name: '🟦 leftWidgetData',
      control: {
        type: 'object'
      },
      description: ' ',
      table: {
        category: 'Left Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    leftNoContentText: {
      name: '🟦 leftNoContentText',
      control: 'text',
      description: ' ',
      table: {
        category: 'Left Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    leftWidthPreference: {
      name: '🟦 leftWidthPreference',
      control: {
        type: 'select'
      },
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: ' ',
      table: {
        category: 'Left Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    leftClassName: {
      name: '🟦 leftClassName',
      control: 'text',
      description: ' ',
      table: {
        category: 'Left Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    // Right table props - define fresh with no column data
    rightDataSource: {
      name: '🟩 rightDataSource',
      control: 'text',
      description: ' ',
      table: {
        category: 'Right Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    rightTitle: {
      name: '🟩 rightTitle',
      control: 'text',
      description: ' ',
      table: {
        category: 'Right Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    rightWidgetData: {
      name: '🟩 rightWidgetData',
      control: {
        type: 'object'
      },
      description: ' ',
      table: {
        category: 'Right Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    rightNoContentText: {
      name: '🟩 rightNoContentText',
      control: 'text',
      description: ' ',
      table: {
        category: 'Right Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    rightWidthPreference: {
      name: '🟩 rightWidthPreference',
      control: {
        type: 'select'
      },
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: ' ',
      table: {
        category: 'Right Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    rightClassName: {
      name: '🟩 rightClassName',
      control: 'text',
      description: ' ',
      table: {
        category: 'Right Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    }
  } as any,
  render: args => {
    // Cast args to include our custom properties
    const extendedArgs = args as any;
    return <>\r
        <style>\r
          {\`
            .custom-half-width {
              width: calc(50% - 20px) !important;
              position: relative;
              display: flex;
              flex-direction: column;
              border: 1px solid #c0c8cf;
              border-radius: 3px;
              background-color: #fff;
              padding: 20px;
              float: left;
            }
          \`}\r
        </style>\r
        <div style={{
        display: 'flex',
        gap: '20px'
      }}>\r
          <DataTable widgetData={extendedArgs.leftWidgetData || dataTableFixtures.tabbed()} title={extendedArgs.leftTitle || 'Tabbed Data Table'} noContentText={extendedArgs.leftNoContentText || 'No data available'} widthPreference={extendedArgs.leftWidthPreference || 'halfWidth'} className={extendedArgs.leftClassName || 'custom-half-width'} dataSource={extendedArgs.leftDataSource} />\r
          <DataTable widgetData={extendedArgs.rightWidgetData || dataTableFixtures.oneTab()} title={extendedArgs.rightTitle || 'Data Table'} noContentText={extendedArgs.rightNoContentText || 'No data available'} widthPreference={extendedArgs.rightWidthPreference || 'halfWidth'} className={extendedArgs.rightClassName || 'custom-half-width'} dataSource={extendedArgs.rightDataSource} />\r
        </div>\r
      </>;
  },
  parameters: {
    controls: {
      expanded: true
    }
  }
}`,...(Pe=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Ae,ke,Le;G.parameters={...G.parameters,docs:{...(Ae=G.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    dataSource: 'Professional Growth',
    title: 'Dropdown Data Table',
    widgetData: dataTableFixtures.dropdown(),
    noContentText: 'No data available',
    widthPreference: 'halfWidth',
    isDynamicHeight: true
  }
}`,...(Le=(ke=G.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Ve,Fe,je;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    dataSource: 'Professional Growth',
    title: 'Full Width Data Table',
    widgetData: dataTableFixtures.miscToggles3(),
    noContentText: 'No data available',
    widthPreference: 'fullWidthOnly',
    isDynamicHeight: true
  }
}`,...(je=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Be,He,Oe;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    dataSource: 'Professional Growth',
    title: 'Data Table',
    widgetData: dataTableFixtures.noContent(),
    noContentText: 'No data to display',
    widthPreference: 'halfWidth',
    isDynamicHeight: true
  }
}`,...(Oe=(He=z.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Re,Me,Ee;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    dataSource: 'Professional Growth',
    title: 'Data Table',
    widgetData: dataTableFixtures.noListItems(),
    noContentText: 'No data available',
    widthPreference: 'fullWidthOnly',
    isDynamicHeight: true
  }
}`,...(Ee=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};var Ge,$e,ze;Y.parameters={...Y.parameters,docs:{...(Ge=Y.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    firstDataSource: 'Professional Growth',
    firstTitle: 'Single Dropdown Table',
    firstWidgetData: dataTableFixtures.singleDropdown(),
    firstNoContentText: 'No dropdown data',
    firstWidthPreference: 'halfWidth',
    firstClassName: 'custom-half-width',
    firstIsDynamicHeight: true,
    // Second table args
    secondDataSource: 'Professional Growth',
    secondTitle: 'Single Tab Table',
    secondWidgetData: dataTableFixtures.oneTab(),
    secondNoContentText: 'No tab data',
    secondWidthPreference: 'halfWidth',
    secondClassName: 'custom-half-width',
    secondIsDynamicHeight: true
  } as any,
  argTypes: {
    // Disable ALL inherited controls from meta
    dataSource: {
      table: {
        disable: true
      }
    },
    title: {
      table: {
        disable: true
      }
    },
    widgetData: {
      table: {
        disable: true
      }
    },
    noContentText: {
      table: {
        disable: true
      }
    },
    widthPreference: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    // First table props - define fresh with no column data
    firstDataSource: {
      name: '🟦 firstTableDataSource',
      control: 'text',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstWidgetData: {
      name: '🟦 firstTableWidgetData',
      control: {
        type: 'object'
      },
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstTitle: {
      name: '🟦 firstTableTitle',
      control: 'text',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstNoContentText: {
      name: '🟦 firstTableNoContentText',
      control: 'text',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstWidthPreference: {
      name: '🟦 firstTableWidthPreference',
      control: {
        type: 'select'
      },
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstClassName: {
      name: '🟦 firstTableClassName',
      control: 'text',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstIsDynamicHeight: {
      name: '🟦 firstTableIsDynamicHeight',
      control: 'boolean',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    // Second table props - define fresh with no column data
    secondDataSource: {
      name: '🟩 secondTableDataSource',
      control: 'text',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondWidgetData: {
      name: '🟩 secondTableWidgetData',
      control: {
        type: 'object'
      },
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondTitle: {
      name: '🟩 secondTableTitle',
      control: 'text',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondNoContentText: {
      name: '🟩 secondTableNoContentText',
      control: 'text',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondWidthPreference: {
      name: '🟩 secondTableWidthPreference',
      control: {
        type: 'select'
      },
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondClassName: {
      name: '🟩 secondTableClassName',
      control: 'text',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondIsDynamicHeight: {
      name: '🟩 secondTableIsDynamicHeight',
      control: 'boolean',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    }
  } as any,
  render: args => {
    const extendedArgs = args as any;
    return <>\r
        <style>\r
          {\`
            .custom-half-width {
              width: calc(50% - 20px) !important;
              position: relative;
              display: flex;
              flex-direction: column;
              border: 1px solid #c0c8cf;
              border-radius: 3px;
              background-color: #fff;
              padding: 20px;
              float: left;
            }
          \`}\r
        </style>\r
        <div style={{
        display: 'flex',
        gap: '20px'
      }}>\r
          <DataTable dataSource={extendedArgs.firstDataSource} widgetData={extendedArgs.firstWidgetData || dataTableFixtures.singleDropdown()} title={extendedArgs.firstTitle || 'Single Dropdown Table'} noContentText={extendedArgs.firstNoContentText || 'No dropdown data'} widthPreference={extendedArgs.firstWidthPreference || 'halfWidth'} className={extendedArgs.firstClassName || 'custom-half-width'} isDynamicHeight={extendedArgs.firstIsDynamicHeight} />\r
          <DataTable dataSource={extendedArgs.secondDataSource} widgetData={extendedArgs.secondWidgetData || dataTableFixtures.oneTab()} title={extendedArgs.secondTitle || 'Single Tab Table'} noContentText={extendedArgs.secondNoContentText || 'No tab data'} widthPreference={extendedArgs.secondWidthPreference || 'halfWidth'} className={extendedArgs.secondClassName || 'custom-half-width'} isDynamicHeight={extendedArgs.secondIsDynamicHeight} />\r
        </div>\r
      </>;
  },
  parameters: {
    controls: {
      expanded: true
    }
  }
}`,...(ze=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var qe,Ye,Ue;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Two Tables - Custom Center Alignment Demo',
  args: {
    firstDataSource: 'Professional Growth',
    firstTitle: 'Building Completion Table',
    firstWidgetData: dataTableFixtures.miscToogles(),
    firstNoContentText: 'No building data',
    firstWidthPreference: 'halfWidth',
    firstClassName: 'custom-half-width',
    firstIsDynamicHeight: true,
    // Second table args
    secondDataSource: 'Professional Growth',
    secondTitle: 'Employee Activities Table',
    secondWidgetData: dataTableFixtures.miscToggles2(),
    secondNoContentText: 'No employee data',
    secondWidthPreference: 'halfWidth',
    secondClassName: 'custom-half-width',
    secondIsDynamicHeight: true
  } as any,
  argTypes: {
    // Disable ALL inherited controls from meta
    dataSource: {
      table: {
        disable: true
      }
    },
    title: {
      table: {
        disable: true
      }
    },
    widgetData: {
      table: {
        disable: true
      }
    },
    noContentText: {
      table: {
        disable: true
      }
    },
    widthPreference: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    // First table props - define fresh with no column data
    firstDataSource: {
      name: '🟦 firstTableDataSource',
      control: 'text',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstWidgetData: {
      name: '🟦 firstTableWidgetData',
      control: {
        type: 'object'
      },
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstTitle: {
      name: '🟦 firstTableTitle',
      control: 'text',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstNoContentText: {
      name: '🟦 firstTableNoContentText',
      control: 'text',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstWidthPreference: {
      name: '🟦 firstTableWidthPreference',
      control: {
        type: 'select'
      },
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstClassName: {
      name: '🟦 firstTableClassName',
      control: 'text',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    firstIsDynamicHeight: {
      name: '🟦 firstTableIsDynamicHeight',
      control: 'boolean',
      description: ' ',
      table: {
        category: 'First Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    // Second table props - define fresh with no column data
    secondDataSource: {
      name: '🟩 secondTableDataSource',
      control: 'text',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondWidgetData: {
      name: '🟩 secondTableWidgetData',
      control: {
        type: 'object'
      },
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondTitle: {
      name: '🟩 secondTableTitle',
      control: 'text',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondNoContentText: {
      name: '🟩 secondTableNoContentText',
      control: 'text',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondWidthPreference: {
      name: '🟩 secondTableWidthPreference',
      control: {
        type: 'select'
      },
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondClassName: {
      name: '🟩 secondTableClassName',
      control: 'text',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    },
    secondIsDynamicHeight: {
      name: '🟩 secondTableIsDynamicHeight',
      control: 'boolean',
      description: ' ',
      table: {
        category: 'Second Table',
        type: {
          summary: null
        },
        defaultValue: {
          summary: null
        }
      }
    }
  } as any,
  render: args => {
    const extendedArgs = args as any;
    return <>\r
        <style>\r
          {\`
            .custom-half-width {
              width: calc(50% - 20px) !important;
              position: relative;
              display: flex;
              flex-direction: column;
              border: 1px solid #c0c8cf;
              border-radius: 3px;
              background-color: #fff;
              padding: 20px;
              float: left;
            }
          \`}\r
        </style>\r
        <div style={{
        display: 'flex',
        gap: '20px'
      }}>\r
          <DataTable dataSource={extendedArgs.firstDataSource} widgetData={extendedArgs.firstWidgetData || dataTableFixtures.miscToogles()} title={extendedArgs.firstTitle || 'Building Completion Table'} noContentText={extendedArgs.firstNoContentText || 'No building data'} widthPreference={extendedArgs.firstWidthPreference || 'halfWidth'} className={extendedArgs.firstClassName || 'custom-half-width'} isDynamicHeight={extendedArgs.firstIsDynamicHeight} />\r
          <DataTable dataSource={extendedArgs.secondDataSource} widgetData={extendedArgs.secondWidgetData || dataTableFixtures.miscToggles2()} title={extendedArgs.secondTitle || 'Employee Activities Table'} noContentText={extendedArgs.secondNoContentText || 'No employee data'} widthPreference={extendedArgs.secondWidthPreference || 'halfWidth'} className={extendedArgs.secondClassName || 'custom-half-width'} isDynamicHeight={extendedArgs.secondIsDynamicHeight} />\r
        </div>\r
      </>;
  },
  parameters: {
    controls: {
      expanded: true
    }
  }
}`,...(Ue=(Ye=U.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};const tn=["FullExample","dataTableCompletedActivities","dataTableLastCompletedEvaluationCycle","SingleTab","WithTabs","TwoDatatablesHalfWidth","WithDropdown","PositiveColorTheme","NoContent","EmptyListItems","TwoDatatablesHalfWidthWithDropdown","TwoDatatablesWithNoTabs"];export{q as EmptyListItems,B as FullExample,z as NoContent,$ as PositiveColorTheme,R as SingleTab,E as TwoDatatablesHalfWidth,Y as TwoDatatablesHalfWidthWithDropdown,U as TwoDatatablesWithNoTabs,G as WithDropdown,M as WithTabs,tn as __namedExportsOrder,H as dataTableCompletedActivities,O as dataTableLastCompletedEvaluationCycle,en as default};
