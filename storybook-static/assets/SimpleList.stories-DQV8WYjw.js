import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-D2KL6ZxC.js";import{S as De,W as y}from"./SimpleTab-DQnwjAGM.js";import{D as P}from"./DiveLink-C71QaMM9.js";import{N as B}from"./NoContent-2ZeuBHbV.js";import{d as C}from"./logger-B8LV6ilf.js";import"./preload-helper-Dp1pzeXC.js";const L={validateLinks:t=>{t.forEach(s=>{s.url&&!s.url.startsWith("http://")&&!s.url.startsWith("https://")&&C.warn(`simple-list: Invalid URL format for row "${s.title}". URL must start with http:// or https://. Provided: ${s.url}`)})},extractWidgetData:t=>{if(!t)return{content:[]};const s=Array.isArray(t.content)?t.content:[t.content];return s.forEach(a=>{a.rows&&L.validateLinks(a.rows)}),{content:s}},getInitialSelectedTabIndex:t=>{const s=t.findIndex(a=>a.isSelected);return s>=0?s:0},parseTabTitle:t=>{if(!t)return{displayTitle:""};if(t.startsWith("[")&&t.endsWith("]"))try{const s=JSON.parse(t);if(Array.isArray(s)&&s.length>=1)return{displayTitle:String(s[0])}}catch{C.warn("simple-list: Failed to parse JSON title, using as-is:",t)}return{displayTitle:t}},shouldShowNoContentMessage:t=>!t||!t.rows||!t.rows.length?(C.warn("simple-list: tab is missing rows"),!0):!1,openLink:(t,s)=>{if(t){const a=s?"_blank":"_self";window.open(t,a)}}},Ce="SimpleList-module__fl-base__PncpK",ke="SimpleList-module__fl-tabs-base__BeZa7",We="SimpleList-module__fl-input__iBFm0",Ie="SimpleList-module__fl-input-cbr__0EV1E",je="SimpleList-module__fl-input-text__SWneo",Ee="SimpleList-module__fl-btn__vtKFf",Ae="SimpleList-module__fl-icon__w9JqQ",Me="SimpleList-module__fl-input-label__lljCx",Re="SimpleList-module__fl-select__GugHr",Fe="SimpleList-module__main-label__-S0R5",Pe="SimpleList-module__light__6GkSC",Be="SimpleList-module__heavy__qTgJJ",Oe="SimpleList-module__main-label-group__-Ztiw",qe="SimpleList-module__is-disabled__hsDgo",Ue="SimpleList-module__fl-menu__e4CYP",He="SimpleList-module__button-menu__smqOG",Ve="SimpleList-module__suit-menu__D8-Kd",Xe="SimpleList-module__fl-select-menu__Mkncs",Ze="SimpleList-module__select-menu__5QFob",$e="SimpleList-module__fl-menu-open__oAbyg",Ge="SimpleList-module__fl-menu-closed__-UZEO",Ke="SimpleList-module__fl-menu-vp-right__dq0fY",Qe="SimpleList-module__fl-menu-vp-bottom__-n7Aa",ze="SimpleList-module__select-menu-list__zfwrp",Ye="SimpleList-module__select-menu-list-item__W8pns",Je="SimpleList-module__disabled__m4sDM",et="SimpleList-module__heading__zr7ww",tt="SimpleList-module__fl-button__rVwD8",it="SimpleList-module__filter__1cFUT",lt="SimpleList-module__default-option-label__ebMbn",st="SimpleList-module__active__mLNuZ",nt="SimpleList-module__active-state-link__-6gXn",at="SimpleList-module__view-all__mJh1n",ot="SimpleList-module__blocklist__6uXvT",rt="SimpleList-module__fl-tool-tip__7ebdq",dt="SimpleList-module__flip-x__i8wlg",mt="SimpleList-module__flip-y__ckCX3",pt="SimpleList-module__fl-grid-row-base__tcjKv",ct="SimpleList-module__widget-header-wrapper__7Qbpk",ut="SimpleList-module__widget-header__pTKXu",_t="SimpleList-module__widget-title__cd6Ze",ht="SimpleList-module__widget-subtitle__F3Itv",ft="SimpleList-module__widget-subtitle-text__-U4C8",gt="SimpleList-module__cmp-simple-list__byD9f",wt="SimpleList-module__widget-header-container__CMrvu",St="SimpleList-module__widget-data-source-row__fbU2c",bt="SimpleList-module__simple-list-dive-link__Zd0XD",Lt="SimpleList-module__responsive-layout__1tXM-",xt="SimpleList-module__widget-data-source__ZIRQ5",vt="SimpleList-module__widget-subtitle-row__eHSQp",yt="SimpleList-module__tabs-and-filter-container__cSPTa",Nt="SimpleList-module__tabs-section__YBjW1",Tt="SimpleList-module__tab-navigation__HzIyE",Dt="SimpleList-module__simple-list-wrapper__MhdAu",Ct="SimpleList-module__has-tabs__eMZ4-",kt="SimpleList-module__half-width__da4JK",Wt="SimpleList-module__third-width__CinXa",It="SimpleList-module__full-width__PdCDk",jt="SimpleList-module__scroll__SUH9b",Et="SimpleList-module__simple-list__-3BUB",At="SimpleList-module__simple-list-item__piHFj",Mt="SimpleList-module__simple-list-item-wrapper__QuqkO",Rt="SimpleList-module__item-title__cvycz",Ft="SimpleList-module__item-text__sxuP-",Pt="SimpleList-module__simple-list-no-content__7BrW3",i={"fl-base":"SimpleList-module__fl-base__PncpK",flBase:Ce,"fl-tabs-base":"SimpleList-module__fl-tabs-base__BeZa7",flTabsBase:ke,"fl-input":"SimpleList-module__fl-input__iBFm0",flInput:We,"fl-input-cbr":"SimpleList-module__fl-input-cbr__0EV1E",flInputCbr:Ie,"fl-input-text":"SimpleList-module__fl-input-text__SWneo",flInputText:je,"fl-btn":"SimpleList-module__fl-btn__vtKFf",flBtn:Ee,"fl-icon":"SimpleList-module__fl-icon__w9JqQ",flIcon:Ae,"fl-input-label":"SimpleList-module__fl-input-label__lljCx",flInputLabel:Me,"fl-select":"SimpleList-module__fl-select__GugHr",flSelect:Re,"main-label":"SimpleList-module__main-label__-S0R5",mainLabel:Fe,light:Pe,heavy:Be,"main-label-group":"SimpleList-module__main-label-group__-Ztiw",mainLabelGroup:Oe,"is-disabled":"SimpleList-module__is-disabled__hsDgo",isDisabled:qe,"fl-menu":"SimpleList-module__fl-menu__e4CYP",flMenu:Ue,"button-menu":"SimpleList-module__button-menu__smqOG",buttonMenu:He,"suit-menu":"SimpleList-module__suit-menu__D8-Kd",suitMenu:Ve,"fl-select-menu":"SimpleList-module__fl-select-menu__Mkncs",flSelectMenu:Xe,"select-menu":"SimpleList-module__select-menu__5QFob",selectMenu:Ze,"fl-menu-open":"SimpleList-module__fl-menu-open__oAbyg",flMenuOpen:$e,"fl-menu-closed":"SimpleList-module__fl-menu-closed__-UZEO",flMenuClosed:Ge,"fl-menu-vp-right":"SimpleList-module__fl-menu-vp-right__dq0fY",flMenuVpRight:Ke,"fl-menu-vp-bottom":"SimpleList-module__fl-menu-vp-bottom__-n7Aa",flMenuVpBottom:Qe,"select-menu-list":"SimpleList-module__select-menu-list__zfwrp",selectMenuList:ze,"select-menu-list-item":"SimpleList-module__select-menu-list-item__W8pns",selectMenuListItem:Ye,disabled:Je,heading:et,"fl-button":"SimpleList-module__fl-button__rVwD8",flButton:tt,filter:it,"default-option-label":"SimpleList-module__default-option-label__ebMbn",defaultOptionLabel:lt,active:st,"active-state-link":"SimpleList-module__active-state-link__-6gXn",activeStateLink:nt,"view-all":"SimpleList-module__view-all__mJh1n",viewAll:at,blocklist:ot,"fl-tool-tip":"SimpleList-module__fl-tool-tip__7ebdq",flToolTip:rt,"flip-x":"SimpleList-module__flip-x__i8wlg",flipX:dt,"flip-y":"SimpleList-module__flip-y__ckCX3",flipY:mt,"fl-grid-row-base":"SimpleList-module__fl-grid-row-base__tcjKv",flGridRowBase:pt,"widget-header-wrapper":"SimpleList-module__widget-header-wrapper__7Qbpk",widgetHeaderWrapper:ct,"widget-header":"SimpleList-module__widget-header__pTKXu",widgetHeader:ut,"widget-title":"SimpleList-module__widget-title__cd6Ze",widgetTitle:_t,"widget-subtitle":"SimpleList-module__widget-subtitle__F3Itv",widgetSubtitle:ht,"widget-subtitle-text":"SimpleList-module__widget-subtitle-text__-U4C8",widgetSubtitleText:ft,"cmp-simple-list":"SimpleList-module__cmp-simple-list__byD9f",cmpSimpleList:gt,"widget-header-container":"SimpleList-module__widget-header-container__CMrvu",widgetHeaderContainer:wt,"widget-data-source-row":"SimpleList-module__widget-data-source-row__fbU2c",widgetDataSourceRow:St,"simple-list-dive-link":"SimpleList-module__simple-list-dive-link__Zd0XD",simpleListDiveLink:bt,"responsive-layout":"SimpleList-module__responsive-layout__1tXM-",responsiveLayout:Lt,"widget-data-source":"SimpleList-module__widget-data-source__ZIRQ5",widgetDataSource:xt,"widget-subtitle-row":"SimpleList-module__widget-subtitle-row__eHSQp",widgetSubtitleRow:vt,"tabs-and-filter-container":"SimpleList-module__tabs-and-filter-container__cSPTa",tabsAndFilterContainer:yt,"tabs-section":"SimpleList-module__tabs-section__YBjW1",tabsSection:Nt,"tab-navigation":"SimpleList-module__tab-navigation__HzIyE",tabNavigation:Tt,"simple-list-wrapper":"SimpleList-module__simple-list-wrapper__MhdAu",simpleListWrapper:Dt,"has-tabs":"SimpleList-module__has-tabs__eMZ4-",hasTabs:Ct,"half-width":"SimpleList-module__half-width__da4JK",halfWidth:kt,"third-width":"SimpleList-module__third-width__CinXa",thirdWidth:Wt,"full-width":"SimpleList-module__full-width__PdCDk",fullWidth:It,scroll:jt,"simple-list":"SimpleList-module__simple-list__-3BUB",simpleList:Et,"simple-list-item":"SimpleList-module__simple-list-item__piHFj",simpleListItem:At,"simple-list-item-wrapper":"SimpleList-module__simple-list-item-wrapper__QuqkO",simpleListItemWrapper:Mt,"item-title":"SimpleList-module__item-title__cvycz",itemTitle:Rt,"item-text":"SimpleList-module__item-text__sxuP-",itemText:Ft,"simple-list-no-content":"SimpleList-module__simple-list-no-content__7BrW3",simpleListNoContent:Pt},N=({widgetData:t,noContentText:s="No content available",title:a,widthPreference:k=y.halfWidth,className:W="simple-list-widget",dataSource:x=""})=>{const[o,I]=r.useState(null),[p,be]=r.useState([]),[Le,j]=r.useState(0),[xe,c]=r.useState(!1),[u,ve]=r.useState(void 0),[E,ye]=r.useState(void 0),D=r.useRef(null),A=l=>{switch(l){case"halfWidth":return"half-width";case"thirdWidth":return"third-width";case"fullWidthOnly":return"full-width";default:return"full-width"}},M=()=>"responsive-layout",R=r.useCallback(()=>{D.current&&(D.current.scrollTop=0)},[]),_=r.useCallback(l=>{I(l),R()},[R]),Ne=r.useCallback(l=>{j(l),p[l]&&_(p[l])},[p,_]),Te=r.useCallback((l,n)=>{l&&L.openLink(l,n)},[]);return r.useEffect(()=>{if(!t){c(!0);return}const n=L.extractWidgetData(t).content;if(ve(t.subtitle),ye(t.tagName),n.length===0){c(!0);return}be(n);const m=L.getInitialSelectedTabIndex(n);j(m);const d=n[m];I(d),n.length>1||d&&d.rows&&d.rows.length>0?(_(d),c(!1)):c(!0)},[t,_]),xe?e.jsxs("article",{className:`${i["cmp-simple-list"]} ${i[A(k)]} ${i[M()]} ${W}`.trim(),role:"article","data-tagname":E,children:[x&&e.jsx("div",{className:i["widget-data-source-row"],children:e.jsx("h4",{className:i["widget-data-source"],children:x})}),(a||u)&&e.jsxs("div",{className:i["widget-header-wrapper"],children:[a&&e.jsx("div",{className:i["widget-header"],children:e.jsx("h3",{className:i["widget-title"],children:a})}),u&&e.jsx("div",{className:i["widget-subtitle"],children:e.jsx("h4",{className:i["widget-subtitle-text"],children:u})})]}),e.jsx(B,{noContentText:s,customClassName:i["simple-list-no-content"]}),(o==null?void 0:o.diveLink)&&e.jsx("div",{className:i["simple-list-dive-link"],children:e.jsx(P,{diveLink:o.diveLink,className:"dive-link-simple-list",dataTestId:"simple-list-dive-link"})})]}):e.jsxs("article",{className:`${i["cmp-simple-list"]} theme-default ${p.length>1?i["has-tabs"]:""} ${i[A(k)]} ${i[M()]} ${W}`.trim(),role:"article","data-tagname":E,children:[e.jsxs("div",{className:i["widget-header-container"],children:[x&&e.jsx("div",{className:i["widget-data-source-row"],children:e.jsx("h4",{className:i["widget-data-source"],children:x})}),a&&e.jsx("div",{className:i["widget-header-wrapper"],children:e.jsx("div",{className:i["widget-header"],children:e.jsx("h3",{className:i["widget-title"],children:a})})}),u&&e.jsx("div",{className:i["widget-subtitle"],children:e.jsx("h4",{className:i["widget-subtitle-text"],children:u})})]}),p.length>1&&e.jsx("div",{className:i["widget-subtitle-row"],"data-testid":"widget-subtitle-row",children:e.jsx("div",{className:i["tabs-and-filter-container"],"data-testid":"tabs-and-filter-container",children:e.jsx("div",{className:i["tabs-section"],"data-testid":"tabs-section",children:e.jsx("ul",{role:"tablist",className:i["tab-navigation"],style:{padding:"0px",display:"flex"},children:p.map((l,n)=>{var F;const m=((F=l.rows)==null?void 0:F.length)||0,{displayTitle:d}=L.parseTabTitle(l.title);return e.jsx(De,{label:d||`Tab ${n+1}`,isActive:n===Le,onClick:()=>Ne(n),showCount:m>0,count:m},n)})})})})}),o&&e.jsx("div",{className:i["simple-list-wrapper"],children:o.rows&&o.rows.length>0?e.jsx("div",{className:i.scroll,ref:D,children:e.jsx("ul",{className:i["simple-list"],children:o.rows.map((l,n)=>e.jsx("li",{className:i["simple-list-item"],onClick:()=>Te(l.url,l.isExternal),role:l.url?"button":void 0,tabIndex:l.url?0:-1,style:{cursor:l.url?"pointer":"default"},children:e.jsxs("div",{className:i["simple-list-item-wrapper"],children:[e.jsx("h4",{className:i["item-title"],children:l.url?e.jsx("a",{href:l.url,target:l.isExternal?"_blank":"_self",rel:l.isExternal?"noopener noreferrer":void 0,onClick:m=>m.stopPropagation(),children:l.title}):e.jsx("span",{children:l.title})}),l.text&&e.jsx("p",{className:i["item-text"],children:e.jsx("span",{children:l.text})})]})},n))})}):e.jsx(B,{noContentText:s,customClassName:i["simple-list-no-content"]})}),e.jsx("div",{className:i["simple-list-dive-link"],children:(o==null?void 0:o.diveLink)&&e.jsx(P,{diveLink:o.diveLink,className:"dive-link-simple-list",dataTestId:"simple-list-dive-link"})})]})};N.__docgenInfo={description:"",methods:[],displayName:"SimpleList",props:{widgetData:{required:!1,tsType:{name:"ISimpleListWidgetData"},description:""},dataSource:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},noContentText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No content available'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},widthPreference:{required:!1,tsType:{name:"union",raw:"'thirdWidth' | 'halfWidth' | 'fullWidthOnly'",elements:[{name:"literal",value:"'thirdWidth'"},{name:"literal",value:"'halfWidth'"},{name:"literal",value:"'fullWidthOnly'"}]},description:"",defaultValue:{value:"WidthPreferenceEnum.halfWidth",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'simple-list-widget'",computed:!1}}}};const Bt={features:[{name:"Single or Multi-tab Interface",description:"Display data as a single view or organized into multiple tabs for better content organization"},{name:"Scrollable Content Areas",description:"Automatically adds scrolling when content exceeds container height, with scroll-to-top on tab change"},{name:"Link Handling",description:"Smart link handling with support for both external links (new tab) and internal navigation (same window)"},{name:"URL Validation",description:"Built-in validation ensures URLs start with http:// or https://, logging warnings for invalid links"},{name:"Data Source Labels",description:"Display data origin above widget title to help users understand where information comes from"},{name:"Widget Subtitles",description:"Optional subtitle support via widgetData.subtitle for additional context below the title"},{name:"Responsive Design",description:"Configurable width preferences (halfWidth, thirdWidth, fullWidthOnly) for different dashboard layouts"},{name:"Empty State Handling",description:"Graceful display of customizable no-content message when rows are empty"},{name:"Dive Links",description:"Optional footer links for navigation to complete content lists or external resources"},{name:"Tag Name Support",description:"Optional tagName property for component identification and analytics tracking"}]},Gt={title:"Components/SimpleList",component:N,parameters:{layout:"padded",docs:{description:{component:`
# SimpleList Component

A lightweight dashboard widget for displaying simple lists of links and information.

## Key Features
${Bt.features.map(t=>`- **${t.name}**: ${t.description}`).join(`
`)}

## Props

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| **widgetData** | \`ISimpleListWidgetData\` | No | \`undefined\` | Primary data for the component. Format: { content: {...}, subtitle: '...', tagName: '...' } |
| **dataSource** | \`string \\| undefined\` | No | \`''\` | Data source label displayed above the widget title (e.g., "SAP SuccessFactors") |
| **noContentText** | \`string \\| undefined\` | No | \`'No content available'\` | Customizable message shown when rows array is empty or undefined |
| **title** | \`string \\| undefined\` | No | \`undefined\` | Main heading for the widget, displayed prominently at the top |
| **widthPreference** | \`WidthPreferenceEnum \\| undefined\` | No | \`WidthPreferenceEnum.halfWidth\` | Controls widget width: halfWidth, thirdWidth, fullWidthOnly |
| **className** | \`string \\| undefined\` | No | \`'simple-list-widget'\` | Custom CSS class applied to root element for styling overrides |

## Interface Documentation

### ISimpleListWidgetData
Complete widget data including content and optional metadata:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **content** | \`ISimpleListContent \\| ISimpleListContent[]\` | Yes | Content can be a single object or array of objects for tabbed interface |
| **diveLink** | \`IUrlAndText\` | No | Optional footer link for navigation to full content or external page |
| **subtitle** | \`string\` | No | Widget subtitle displayed below the title, provides additional context |
| **tagName** | \`string\` | No | Component tag name for tracking or analytics purposes |

### ISimpleListContent
Container for list rows and associated metadata:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **rows** | \`ISimpleListRow[]\` | Yes | Array of list items to display, each with title, text, and optional URL |
| **diveLink** | \`IUrlAndText\` | No | Optional link displayed at bottom of content for "see more" functionality |
| **title** | \`string\` | No | Tab title when used in multi-tab interface |
| **value** | \`string\` | No | Tab identifier value for tracking purposes |
| **isSelected** | \`boolean\` | No | Whether this tab is selected by default in multi-tab interface |

### ISimpleListRow
Individual row item with title, description, and optional link:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **title** | \`string\` | Yes | Main title text for the row, displayed as heading |
| **text** | \`string\` | No | Optional description or secondary text displayed below the title |
| **url** | \`string\` | No | Optional link URL - must start with http:// or https:// |
| **isExternal** | \`boolean\` | No | If true, link opens in new tab (_blank); if false, opens in same window (_self) |

## Link Behavior

- **External Links**: Links with \`isExternal: true\` open in new tab with \`target="_blank"\` and \`rel="noopener noreferrer"\`
- **Internal Links**: Links with \`isExternal: false\` open in same window with \`target="_self"\`
- **URL Validation**: All URLs must start with \`http://\` or \`https://\`, other formats generate console warnings

## Usage Examples

### Basic Single Content
\`\`\`tsx
<SimpleList
  widgetData={{
    content: {
      rows: [
        { title: 'Item 1', text: 'Description 1', url: 'https://example.com', isExternal: true }
      ]
    },
    subtitle: 'Important Links',
    tagName: 'cmp-simple-list'
  }}
  title="Quick Links"
  dataSource="Employee Central"
/>
\`\`\`

### Tabbed Content
\`\`\`tsx
<SimpleList
  widgetData={{
    subtitle: 'Tabbed content example',
    content: [
      { title: 'Tab 1', rows: [{ title: 'Item 1', text: 'Description 1' }] },
      { title: 'Tab 2', rows: [{ title: 'Item 2', text: 'Description 2' }] }
    ]
  }}
  title="Tabbed List"
/>
\`\`\`

### With Dive Link
\`\`\`tsx
<SimpleList
  widgetData={{
    content: {
      rows: [{ title: 'Item 1' }],
      diveLink: { text: 'View All Items', url: 'https://example.com/all', isExternal: true }
    },
    subtitle: 'Recent items'
  }}
  title="List with Footer Link"
  dataSource="SAP SuccessFactors"
/>
\`\`\`
        `}}},tags:["autodocs"]},T={subtitle:"Fully populated with scrolling",content:{rows:[{title:"Samsung",text:"this is samsung",url:"http://www.samsung.com",isExternal:!0},{title:"Google",text:"also google",url:"http://google.com",isExternal:!0},{title:"Apple",text:"This is the fancy Apple website",url:"http://www.apple.com",isExternal:!0},{title:"Frontline Education",text:"asdfasdfasdfasdfasdfasdfasdf",url:"http://frontlineed.com",isExternal:!0},{title:"Stack Overflow",text:"all you need to know about software development",url:"http://stackoverflow.com",isExternal:!0}]},tagName:"cmp-simple-list"},Se={subtitle:"tabbed simple list",content:[{title:"Scrolling",rows:[{title:"Samsung",text:"this is samsung",url:"http://www.samsung.com"},{title:"Google",text:"also google",url:"http://google.com"},{title:"Apple",text:"This is the fancy Apple website",url:"http://www.apple.com"},{title:"Row without second line",url:"http://frontlineed.com"},{title:"Row Without Link",text:"all you need to know about software development"},{title:"Apple",text:"This is the fancy Apple website",url:"http://www.apple.com"},{title:"Row without second line",url:"http://frontlineed.com"},{title:"Row Without Link",text:"all you need to know about software development"},{title:"Apple",text:"This is the fancy Apple website",url:"http://www.apple.com"},{title:"Row without second line",url:"http://frontlineed.com"},{title:"Row Without Link",text:"all you need to know about software development"},{title:"Final List Item",text:"dun dun dun",url:"http://stackoverflow.com"}]},{title:"No Scrolling",rows:[{title:"Frontline Education",text:"asdfasdfasdfasdfasdfasdfasdf",url:"http://frontlineed.com"},{title:"Stack Overflow",text:"all you need to know about software development",url:"http://stackoverflow.com"}]}],tagName:"cmp-simple-list"},Ot={subtitle:"Fully populated without scrolling",content:{rows:[{title:"Samsung",text:"this is samsung",url:"http://www.samsung.com"},{title:"Google",text:"also google",url:"http://google.com"},{title:"Apple",text:"This is the fancy Apple website",url:"http://www.apple.com"}]},tagName:"cmp-simple-list"},h={args:{widgetData:T,title:"Full Simple List"}},f={args:{widgetData:Ot,title:"Simple List with No Scroll"}},g={args:{widgetData:Se,title:"Tabbed Simple List"}},w={args:{widgetData:T,noContentText:"No items available",title:"Full Width Simple List",widthPreference:y.fullWidthOnly}},S={args:{widgetData:{content:{rows:T.content.rows,diveLink:{text:"View All Items",url:"https://example.com/all",isExternal:!0}}},title:"Simple List with Data Source and Link",dataSource:"SuccessFactors"}},v={parameters:{controls:{include:["leftTitle","leftSubtitle","leftWidgetData","leftNoContentText","leftDataSource","rightTitle","rightSubtitle","rightWidgetData","rightNoContentText","rightDataSource"]}},args:{leftTitle:"Scrolling List",leftSubtitle:"Fully populated with scrolling",leftWidgetData:T,leftNoContentText:"No items found",leftDataSource:"Data Source A",rightTitle:"No Scroll List",rightSubtitle:"Fully populated without scrolling",rightWidgetData:Se,rightNoContentText:"No items available",rightDataSource:"Data Source B"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .side-by-side-container {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
          }
          .side-by-side-container > * {
            flex: 1;
            min-width: 400px;
          }
        `}),e.jsxs("div",{className:"side-by-side-container",children:[e.jsx(N,{widgetData:t.leftWidgetData,title:t.leftTitle,noContentText:t.leftNoContentText,widthPreference:y.halfWidth,dataSource:t.leftDataSource}),e.jsx(N,{widgetData:t.rightWidgetData,title:t.rightTitle,noContentText:t.rightNoContentText,widthPreference:y.halfWidth,dataSource:t.rightDataSource})]})]})},b={args:{widgetData:{content:{rows:[]},subtitle:"No items available",tagName:"cmp-simple-list-empty"},title:"Empty List",noContentText:"Nothing to show here!"},parameters:{docs:{description:{story:"SimpleList with empty content (no rows). Shows the noContentText message and reserves space for the dive link."}}}};var O,q,U,H,V;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    widgetData: singleContentData,
    title: 'Full Simple List'
  }
}`,...(U=(q=h.parameters)==null?void 0:q.docs)==null?void 0:U.source},description:{story:"Basic SimpleList with single content and no tabs",...(V=(H=h.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var X,Z,$,G,K;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    widgetData: noScrollData,
    title: 'Simple List with No Scroll'
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"SimpleList with items without Scroll",...(K=(G=f.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};var Q,z,Y,J,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    widgetData: tabbedContentData,
    title: 'Tabbed Simple List'
  }
}`,...(Y=(z=g.parameters)==null?void 0:z.docs)==null?void 0:Y.source},description:{story:"SimpleList with tabbed content",...(ee=(J=g.parameters)==null?void 0:J.docs)==null?void 0:ee.description}}};var te,ie,le,se,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    widgetData: singleContentData,
    noContentText: 'No items available',
    title: 'Full Width Simple List',
    widthPreference: WidthPreferenceEnum.fullWidthOnly
  }
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:"SimpleList with full width preference",...(ne=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var ae,oe,re,de,me;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    widgetData: {
      content: {
        rows: singleContentData.content.rows,
        diveLink: {
          text: 'View All Items',
          url: 'https://example.com/all',
          isExternal: true
        }
      }
    },
    title: 'Simple List with Data Source and Link',
    dataSource: 'SuccessFactors'
  }
}`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:"SimpleList with data source and dive link",...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.description}}};var pe,ce,ue;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['leftTitle', 'leftSubtitle', 'leftWidgetData', 'leftNoContentText', 'leftDataSource', 'rightTitle', 'rightSubtitle', 'rightWidgetData', 'rightNoContentText', 'rightDataSource']
    }
  },
  args: {
    leftTitle: 'Scrolling List',
    leftSubtitle: 'Fully populated with scrolling',
    leftWidgetData: singleContentData,
    leftNoContentText: 'No items found',
    leftDataSource: 'Data Source A',
    rightTitle: 'No Scroll List',
    rightSubtitle: 'Fully populated without scrolling',
    rightWidgetData: tabbedContentData,
    rightNoContentText: 'No items available',
    rightDataSource: 'Data Source B'
  },
  render: args => <>\r
      <style>\r
        {\`
          .side-by-side-container {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
          }
          .side-by-side-container > * {
            flex: 1;
            min-width: 400px;
          }
        \`}\r
      </style>\r
      <div className="side-by-side-container">\r
        <SimpleList widgetData={args.leftWidgetData} title={args.leftTitle} noContentText={args.leftNoContentText} widthPreference={WidthPreferenceEnum.halfWidth} dataSource={args.leftDataSource} />\r
        <SimpleList widgetData={args.rightWidgetData} title={args.rightTitle} noContentText={args.rightNoContentText} widthPreference={WidthPreferenceEnum.halfWidth} dataSource={args.rightDataSource} />\r
      </div>\r
    </>
}`,...(ue=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var _e,he,fe,ge,we;b.parameters={...b.parameters,docs:{...(_e=b.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    widgetData: {
      content: {
        rows: []
      },
      subtitle: 'No items available',
      tagName: 'cmp-simple-list-empty'
    },
    title: 'Empty List',
    noContentText: 'Nothing to show here!'
  },
  parameters: {
    docs: {
      description: {
        story: 'SimpleList with empty content (no rows). Shows the noContentText message and reserves space for the dive link.'
      }
    }
  }
}`,...(fe=(he=b.parameters)==null?void 0:he.docs)==null?void 0:fe.source},description:{story:"SimpleList with empty content",...(we=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:we.description}}};const Kt=["SingleContent","NoScroll","TabbedContent","FullWidth","WithDataSourceandLink","TwoSimpleListsSideBySide","EmptyContent"];export{b as EmptyContent,w as FullWidth,f as NoScroll,h as SingleContent,g as TabbedContent,v as TwoSimpleListsSideBySide,S as WithDataSourceandLink,Kt as __namedExportsOrder,Gt as default};
