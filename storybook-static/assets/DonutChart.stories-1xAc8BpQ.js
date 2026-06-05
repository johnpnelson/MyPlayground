import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-D2KL6ZxC.js";import{H as It}from"./highcharts-BCSdVofN.js";import{d as q}from"./logger-B8LV6ilf.js";import{D as Mt}from"./DiveLink-C71QaMM9.js";import{S as Bt,W as z}from"./SimpleTab-DQnwjAGM.js";import{N as Et}from"./NoContent-2ZeuBHbV.js";import"./preload-helper-Dp1pzeXC.js";const F=t=>!(t!=null&&t.donuts)||!t.donuts.length?!0:t.donuts.every(a=>!a.slices||!a.slices.length),Ot=()=>{try{const t=getComputedStyle(document.documentElement);return[t.getPropertyValue("--chart-color-1").trim()||"#2E7AB8",t.getPropertyValue("--chart-color-2").trim()||"#6BCCB3",t.getPropertyValue("--chart-color-3").trim()||"#7E4082",t.getPropertyValue("--chart-color-4").trim()||"#DE8D37",t.getPropertyValue("--chart-color-5").trim()||"#A6B0B9",t.getPropertyValue("--chart-color-6").trim()||"#DEB743",t.getPropertyValue("--chart-color-7").trim()||"#E56A54",t.getPropertyValue("--chart-color-8").trim()||"#C67DCC",t.getPropertyValue("--chart-color-9").trim()||"#2E7362",t.getPropertyValue("--chart-color-10").trim()||"#E05AA2"]}catch{return["#2E7AB8","#6BCCB3","#7E4082","#DE8D37","#A6B0B9","#DEB743","#E56A54","#C67DCC","#2E7362","#E05AA2"]}},Y=()=>{try{return"#666"}catch{return"#87939e"}},jt=t=>{const{seriesTotal:r,center:a,isMoney:h,innerLabel:n}=t;return{name:n||"Total",size:"0",data:[r],center:a,enableMouseTracking:!1,dataLabels:{formatter:function(){return`<div class='donut-chart-total'>
          <div class='donut-chart-value'>${h?"$":""}${this.total||0}</div>
          <div class='donut-chart-label'>${n||"Total"}</div>
        </div>`},useHTML:!0,distance:r?-30:30,x:r?0:-60,verticalAlign:"middle",crop:!1,overflow:"allow"}}},K=t=>{switch(t){case 1:return"90%";case 2:return"60%";case 3:return"45%";default:return"40%"}},G=[[["50%","50%"]],[["50%","50%"]],[["25%","50%"],["75%","50%"]],[["15%","50%"],["50%","50%"],["85%","50%"]]],U=t=>{if(t.donuts.length<2)throw new Error("renderDonutLabel is only used for multiple donut charts");return function(){this.series.forEach(r=>{r._customLabel&&(r._customLabel.destroy(),r._customLabel=null)}),t.donuts.forEach((r,a)=>{const h=a*2,n=this.series[h];if(n&&n.center&&this.renderer){const g=n.center[0]+this.plotLeft,m=n.center[1]+this.plotTop+80+16,o=`<div class="donut-chart-multilabel">${r.label||""}</div>`;n._customLabel=this.renderer.label(o,g,m,void 0,void 0,void 0,!0).attr({align:"center"}).add()}})}},At=(t,r,a,h)=>({chart:{type:"pie",height:h},credits:{enabled:!1},plotOptions:{pie:{shadow:!1,dataLabels:{connectorWidth:0},states:{hover:{enabled:!0,halo:{size:0}},inactive:{opacity:1}}},series:{point:{events:{legendItemClick:()=>!1}}}},tooltip:{backgroundColor:"rgba(255, 255, 255, 0.95)",borderColor:"#e5e9ec",borderRadius:4,borderWidth:2,shadow:!0,style:{fontSize:"1.2rem"},useHTML:!0,outside:!0,formatter:function(){const n=this;return`${n.point.name}: <b>${n.y}</b>`}},colors:t,legend:{align:r?"right":"center",verticalAlign:r?"middle":"bottom",layout:r?"vertical":"horizontal",itemStyle:{cursor:"default",fontWeight:"normal",color:Y(),fontSize:"1.2rem",fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},itemHoverStyle:{color:Y()},...a&&{labelFormatter:a}},series:[]}),Vt=t=>{const r=t.donuts.length,a=[];let h=0;return t.donuts.forEach(n=>{!n.slices||!Array.isArray(n.slices)||(n.slices.forEach(s=>{s&&s.key&&(h===0?a.push(s.key):a.indexOf(s.key)<0&&(a.push(s.key),n.slices.push({key:s.key,value:0})))}),h++)}),{donutCount:r,namesInLegend:a}},Rt=(t,r,a,h,n)=>{if(!t.slices||!Array.isArray(t.slices)||t.slices.length===0)return null;let s;t.showCustomSeriesTotal?s=t.slices.reduce((i,l)=>{if(!l||typeof l.value!="number")return i;const w=l;return w.addToSeriesTotal&&(i+=l.value),w.subtractFromSeriesTotal&&(i-=l.value),i},0):s=t.slices.reduce((i,l)=>!l||typeof l.value!="number"?i:i+l.value,0);const m={type:"pie",...jt({seriesTotal:s,center:G[a][r],isMoney:n==null?void 0:n.isMoney,innerLabel:n==null?void 0:n.innerLabel})},o={type:"pie",data:t.slices.filter(i=>i&&i.key&&typeof i.value=="number").map(i=>{const l=i;return{name:i.key||"Unknown",y:i.value||0,color:l.color}}),center:G[a][r],size:K(a),innerSize:"75%",showInLegend:h,dataLabels:{enabled:!1}},b=[m,o];return s===0&&b.push({type:"pie",center:G[a][r],size:K(a),innerSize:"75%",enableMouseTracking:!1,showInLegend:!1,dataLabels:{enabled:!1},data:[{name:"No Data",y:1,color:"rgba(200, 200, 200, 0.24)"}]}),b},$t=(t,r)=>{var b,i;const{donutCount:a}=Vt(t),h=!((b=t.options)!=null&&b.isLegendOnBottom),n=Ot();let s=null;(i=t.options)!=null&&i.numberLegendItems&&a===1&&(s=function(){return`${this.y?this.y:"0"} ${this.name}`});const g=At(n,h,s,r);g.title={text:""};let m=0;const o=[];return t.donuts.forEach(l=>{const v=Rt(l,m,a,m===0,t.options);v&&o.push(...v),m++}),g.series=o,a>1&&(g.chart={...g.chart,events:{load:U(t),redraw:U(t)}}),g},qt="DonutChart-module__fl-base__kot1q",Gt="DonutChart-module__fl-tabs-base__s8aAa",zt="DonutChart-module__fl-input__8KAdt",Qt="DonutChart-module__fl-input-cbr__CoEly",Ft="DonutChart-module__fl-input-text__0XAhx",Yt="DonutChart-module__fl-btn__-HVeA",Kt="DonutChart-module__fl-icon__eYmL4",Ut="DonutChart-module__fl-input-label__4Q-Uy",Zt="DonutChart-module__fl-select__sYa-R",Jt="DonutChart-module__main-label__euN3H",Xt="DonutChart-module__light__mmQgD",te="DonutChart-module__heavy__ELBli",ee="DonutChart-module__main-label-group__6lcfk",ne="DonutChart-module__is-disabled__Y94l-",ae="DonutChart-module__fl-menu__9t3Ci",re="DonutChart-module__button-menu__NqC7Q",oe="DonutChart-module__suit-menu__J49oG",ie="DonutChart-module__fl-select-menu__kGi5-",le="DonutChart-module__select-menu__a00K6",se="DonutChart-module__fl-menu-open__NDdgH",ce="DonutChart-module__fl-menu-closed__q-6Zw",ue="DonutChart-module__fl-menu-vp-right__WjQSF",de="DonutChart-module__fl-menu-vp-bottom__Zwslj",he="DonutChart-module__select-menu-list__MtkUb",me="DonutChart-module__select-menu-list-item__uAMD9",pe="DonutChart-module__disabled__uN-PB",fe="DonutChart-module__heading__b7Tko",ge="DonutChart-module__fl-button__y7VNP",_e="DonutChart-module__filter__R0-KB",De="DonutChart-module__default-option-label__2QKOh",be="DonutChart-module__active__-SY87",Ce="DonutChart-module__active-state-link__1L2Jx",ye="DonutChart-module__view-all__IpUyN",we="DonutChart-module__blocklist__xAxFc",ve="DonutChart-module__fl-tool-tip__QPgDC",Se="DonutChart-module__flip-x__IAx5D",xe="DonutChart-module__flip-y__qHln8",Ne="DonutChart-module__fl-grid-row-base__LJm-s",Te="DonutChart-module__donut-chart-widget__nMKaa",We="DonutChart-module__widget-header__K-MQv",Pe="DonutChart-module__widget-title__pkqkR",Le="DonutChart-module__widget-subtitle__Rw0w3",ke="DonutChart-module__widget-data-source__djGv-",He="DonutChart-module__single-content__VwP-m",Ie="DonutChart-module__chart-tabs__7YeZ4",Me="DonutChart-module__chart-container__WDN3p",Be="DonutChart-module__chart__oIaKj",Ee="DonutChart-module__dive-link__YCfJB",Oe="DonutChart-module__btn__r98Vd",je="DonutChart-module__no-content-wrapper__tc42s",Ae="DonutChart-module__no-content-image__X03sZ",Ve="DonutChart-module__no-data-icon__dyzdu",Re="DonutChart-module__no-content-message__WGJK6",$e="DonutChart-module__action-list-no-content__Gb1xS",qe="DonutChart-module__d-flex__4qd6d",Ge="DonutChart-module__justify-content-between__9NyM1",ze="DonutChart-module__align-items-center__E8J3L",Qe="DonutChart-module__mb-3__oKIYp",Fe="DonutChart-module__text-muted__yPn9G",Ye="DonutChart-module__highcharts-series-group__93OC6",Ke="DonutChart-module__half-width__fYtBC",Ue="DonutChart-module__third-width__HmmGi",Ze="DonutChart-module__full-width__Eapd5",c={"fl-base":"DonutChart-module__fl-base__kot1q",flBase:qt,"fl-tabs-base":"DonutChart-module__fl-tabs-base__s8aAa",flTabsBase:Gt,"fl-input":"DonutChart-module__fl-input__8KAdt",flInput:zt,"fl-input-cbr":"DonutChart-module__fl-input-cbr__CoEly",flInputCbr:Qt,"fl-input-text":"DonutChart-module__fl-input-text__0XAhx",flInputText:Ft,"fl-btn":"DonutChart-module__fl-btn__-HVeA",flBtn:Yt,"fl-icon":"DonutChart-module__fl-icon__eYmL4",flIcon:Kt,"fl-input-label":"DonutChart-module__fl-input-label__4Q-Uy",flInputLabel:Ut,"fl-select":"DonutChart-module__fl-select__sYa-R",flSelect:Zt,"main-label":"DonutChart-module__main-label__euN3H",mainLabel:Jt,light:Xt,heavy:te,"main-label-group":"DonutChart-module__main-label-group__6lcfk",mainLabelGroup:ee,"is-disabled":"DonutChart-module__is-disabled__Y94l-",isDisabled:ne,"fl-menu":"DonutChart-module__fl-menu__9t3Ci",flMenu:ae,"button-menu":"DonutChart-module__button-menu__NqC7Q",buttonMenu:re,"suit-menu":"DonutChart-module__suit-menu__J49oG",suitMenu:oe,"fl-select-menu":"DonutChart-module__fl-select-menu__kGi5-",flSelectMenu:ie,"select-menu":"DonutChart-module__select-menu__a00K6",selectMenu:le,"fl-menu-open":"DonutChart-module__fl-menu-open__NDdgH",flMenuOpen:se,"fl-menu-closed":"DonutChart-module__fl-menu-closed__q-6Zw",flMenuClosed:ce,"fl-menu-vp-right":"DonutChart-module__fl-menu-vp-right__WjQSF",flMenuVpRight:ue,"fl-menu-vp-bottom":"DonutChart-module__fl-menu-vp-bottom__Zwslj",flMenuVpBottom:de,"select-menu-list":"DonutChart-module__select-menu-list__MtkUb",selectMenuList:he,"select-menu-list-item":"DonutChart-module__select-menu-list-item__uAMD9",selectMenuListItem:me,disabled:pe,heading:fe,"fl-button":"DonutChart-module__fl-button__y7VNP",flButton:ge,filter:_e,"default-option-label":"DonutChart-module__default-option-label__2QKOh",defaultOptionLabel:De,active:be,"active-state-link":"DonutChart-module__active-state-link__1L2Jx",activeStateLink:Ce,"view-all":"DonutChart-module__view-all__IpUyN",viewAll:ye,blocklist:we,"fl-tool-tip":"DonutChart-module__fl-tool-tip__QPgDC",flToolTip:ve,"flip-x":"DonutChart-module__flip-x__IAx5D",flipX:Se,"flip-y":"DonutChart-module__flip-y__qHln8",flipY:xe,"fl-grid-row-base":"DonutChart-module__fl-grid-row-base__LJm-s",flGridRowBase:Ne,"donut-chart-widget":"DonutChart-module__donut-chart-widget__nMKaa",donutChartWidget:Te,"widget-header":"DonutChart-module__widget-header__K-MQv",widgetHeader:We,"widget-title":"DonutChart-module__widget-title__pkqkR",widgetTitle:Pe,"widget-subtitle":"DonutChart-module__widget-subtitle__Rw0w3",widgetSubtitle:Le,"widget-data-source":"DonutChart-module__widget-data-source__djGv-",widgetDataSource:ke,"single-content":"DonutChart-module__single-content__VwP-m",singleContent:He,"chart-tabs":"DonutChart-module__chart-tabs__7YeZ4",chartTabs:Ie,"chart-container":"DonutChart-module__chart-container__WDN3p",chartContainer:Me,chart:Be,"dive-link":"DonutChart-module__dive-link__YCfJB",diveLink:Ee,btn:Oe,"no-content-wrapper":"DonutChart-module__no-content-wrapper__tc42s",noContentWrapper:je,"no-content-image":"DonutChart-module__no-content-image__X03sZ",noContentImage:Ae,"no-data-icon":"DonutChart-module__no-data-icon__dyzdu",noDataIcon:Ve,"no-content-message":"DonutChart-module__no-content-message__WGJK6",noContentMessage:Re,"action-list-no-content":"DonutChart-module__action-list-no-content__Gb1xS",actionListNoContent:$e,"d-flex":"DonutChart-module__d-flex__4qd6d",dFlex:qe,"justify-content-between":"DonutChart-module__justify-content-between__9NyM1",justifyContentBetween:Ge,"align-items-center":"DonutChart-module__align-items-center__E8J3L",alignItemsCenter:ze,"mb-3":"DonutChart-module__mb-3__oKIYp",mb3:Qe,"text-muted":"DonutChart-module__text-muted__yPn9G",textMuted:Fe,"highcharts-series-group":"DonutChart-module__highcharts-series-group__93OC6",highchartsSeriesGroup:Ye,"half-width":"DonutChart-module__half-width__fYtBC",halfWidth:Ke,"third-width":"DonutChart-module__third-width__HmmGi",thirdWidth:Ue,"full-width":"DonutChart-module__full-width__Eapd5",fullWidth:Ze},y=({widgetData:t,title:r,className:a="",widthPreference:h=z.fullWidthOnly,dataSource:n="",height:s})=>{const g=u=>{switch(u){case"halfWidth":return"half-width";case"thirdWidth":return"third-width";case"fullWidthOnly":return"full-width";default:return"full-width"}},m=p.useRef(null),o=p.useRef(null),[b,i]=p.useState(!1),[l,w]=p.useState(!1),[v,kt]=p.useState(0);p.useEffect(()=>(w(!0),()=>w(!1)),[]);const V=p.useMemo(()=>({isLegendOnBottom:!1,numberLegendItems:!1,isMoney:!1}),[]),R=Array.isArray(t==null?void 0:t.content),S=p.useCallback(()=>{if(t)return R?t.content[v]:t.content},[t,R,v]),Ht=()=>W!=null&&W.diveLink?e.jsx(Mt,{diveLink:W.diveLink,dataTestId:"donut-chart-dive-link"}):null,T=p.useCallback(u=>{if(!m.current||!l)return;if(o.current){try{o.current.destroy()}catch(_){q.warn("Error destroying chart:",_)}o.current=null}const d=u.options?{...V,...u.options}:V,C={...u,options:d};try{const _=$t(C,s);o.current=It.chart(m.current,_)}catch(_){q.error("Error creating chart:",_)}},[V,l,s]);p.useEffect(()=>{if(!l)return;const u=S(),d=F(u);if(i(d),!d&&u){const C=setTimeout(()=>{T(u)},0);return()=>clearTimeout(C)}else if(o.current){try{o.current.destroy()}catch(C){q.warn("Error destroying chart:",C)}o.current=null}},[S,T,l]),p.useEffect(()=>{let u=null,d=null;const C=()=>{if(!l)return;const $=S(),Q=F($);if(i(Q),!Q&&$){if(o.current){try{o.current.destroy()}catch{}o.current=null}T($)}else if(o.current){try{o.current.destroy()}catch{}o.current=null}},_=()=>{d&&clearTimeout(d),d=setTimeout(()=>{C()},100)};return window.addEventListener("resize",_),m.current&&"ResizeObserver"in window&&(u=new ResizeObserver(()=>{_()}),u.observe(m.current)),()=>{if(window.removeEventListener("resize",_),u&&u.disconnect(),d&&clearTimeout(d),o.current){try{o.current.destroy()}catch{}o.current=null}}},[l,S,T]);const W=S();return e.jsxs("div",{className:`${c["donut-chart-widget"]} ${c[g(h)]} ${a}`.trim(),role:"img","aria-label":"Donut chart visualization",children:[e.jsx("div",{className:`${c["widget-header"]} ${c["d-flex"]} ${c["justify-content-between"]} ${c["align-items-center"]} ${c["mb-3"]}`,children:e.jsxs("div",{children:[n&&e.jsx("h4",{className:c["widget-data-source"],children:n}),r&&e.jsx("h3",{className:`${c["widget-title"]}`,children:r}),t&&t.subtitle&&e.jsx("p",{className:`${c["widget-subtitle"]}  ${c["text-muted"]}`,children:t.subtitle})]})}),R&&Array.isArray(t.content)&&e.jsx("div",{className:`${c["tabbed-content"]}`,children:e.jsx("div",{className:c["chart-tabs"],children:t.content.map((u,d)=>e.jsx(Bt,{label:u.tabTitle||`Tab ${d+1}`,isActive:d===v,onClick:()=>kt(d)},`tab-${u.tabTitle||"untitled"}-${d}`))})}),e.jsx("div",{className:c["single-content"],children:e.jsx("div",{className:c["chart-container"],children:b?e.jsx(Et,{customClassName:c["action-list-no-content"]}):e.jsx("div",{ref:m,className:c.chart})})}),e.jsx("div",{className:`${c["donut-chart-dive-link"]}`,children:Ht()})]})};y.__docgenInfo={description:"",methods:[],displayName:"DonutChart",props:{widgetData:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  content: IDonutChartContent | IDonutChartContent[];\r
  tagName: string;\r
  subtitle?: string;\r
}`,signature:{properties:[{key:"content",value:{name:"union",raw:"IDonutChartContent | IDonutChartContent[]",elements:[{name:"IDonutChartContent"},{name:"Array",elements:[{name:"IDonutChartContent"}],raw:"IDonutChartContent[]"}],required:!0}},{key:"tagName",value:{name:"string",required:!0}},{key:"subtitle",value:{name:"string",required:!1}}]}},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},widthPreference:{required:!1,tsType:{name:"union",raw:"'thirdWidth' | 'halfWidth' | 'fullWidthOnly'",elements:[{name:"literal",value:"'thirdWidth'"},{name:"literal",value:"'halfWidth'"},{name:"literal",value:"'fullWidthOnly'"}]},description:"",defaultValue:{value:"WidthPreferenceEnum.fullWidthOnly",computed:!0}},dataSource:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},height:{required:!1,tsType:{name:"number"},description:""}}};const f={overview:`
The **DonutChart** component displays one or more donut charts using Highcharts. It supports custom legends, money formatting, numbered legend items, inner labels, and responsive layouts. Migrated from AngularJS 'cmp-donut-chart' for React.

## Key Features

- **Single and Multiple Donuts**: Support for displaying one or multiple donut charts side by side
- **Responsive Design**: Automatically adjusts to container size and includes mobile breakpoints
- **Customizable Options**: Legend positioning, money formatting, numbered legend items, and custom inner labels
- **TypeScript Support**: Full TypeScript support with proper type definitions
- **Accessibility**: Screen reader friendly with proper ARIA attributes
- **No Data Handling**: Graceful fallback when no data is available
  `,props:{widgetData:{description:"Main data object containing donuts, slices, and options for the chart",example:`{
  donuts: [
    {
      slices: [
        { key: 'Mathematics', value: 85 },
        { key: 'Science', value: 92 }
      ],
      label: 'Student Performance'
    }
  ],
  diveLink: { url: 'https://example.com', text: 'View Details' },
  options: { isLegendOnBottom: true, numberLegendItems: false, isMoney: false }
}`},title:{description:"Widget title displayed above the chart"},subtitle:{description:"Widget subtitle displayed below the title"},className:{description:"Additional CSS class names for custom styling"},widthPreference:{description:"Controls the layout and width of the widget: 'third-width', 'half-width', 'full-width'"},dataSource:{description:"Label for the data source displayed above the widget title"}},interfaces:{IDonutChartContent:`
interface IDonutChartContent {
  donuts: IOneDonut[];
  diveLink?: IUrlAndText;
  options?: IDonutChartOptions;
  tabTitle?: string;
}
interface IOneDonut {
  slices: IDonutSlice[];
  label?: string;
  showCustomSeriesTotal?: boolean;
}
interface IDonutSlice {
  key: string;
  value: number;
  color?: string;
  addToSeriesTotal?: boolean;
  subtractFromSeriesTotal?: boolean;
}
interface IDonutChartOptions {
  isLegendOnBottom?: boolean;
  numberLegendItems?: boolean;
  isMoney?: boolean;
  innerLabel?: string;
}
interface IUrlAndText {
  url: string;
  text: string;
}
`},usage:{basic:`
import DonutChart from './DonutChart';

const data = {
  donuts: [
    {
      slices: [
        { key: 'Mathematics', value: 85 },
        { key: 'Science', value: 92 }
      ],
      label: 'Student Performance'
    }
  ],
  diveLink: { url: 'https://example.com', text: 'View Details' },
  options: { isLegendOnBottom: true, numberLegendItems: false, isMoney: false }
};

<DonutChart
  widgetData={data}
  title="Student Performance"
  subtitle="2024 Donut Data"
  dataSource="Professional Growth"
  widthPreference="fullWidthOnly"
/>
`},features:`
    ✅ Single and multiple donut support
    ✅ Customizable Legend positioning options
    ✅ Money formatting for values
    ✅ Numbered legend items
    ✅ Custom inner labels
    ✅ No content state handling
    ✅ Responsive design
    ✅ Color palette matching
`},sn={title:"Components/DonutChart",component:y,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
${f.overview}

## Props

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| **widgetData** | \`IDonutChartContent | IDonutChartContent[] | undefined\` | No | \`undefined\` | ${f.props.widgetData.description} |
| **title** | \`string\` | No | \`undefined\` | ${f.props.title.description} |
| **subtitle** | \`string\` | No | \`undefined\` | ${f.props.subtitle.description} |
| **className** | \`string\` | No | \`''\` | ${f.props.className.description} |
| **widthPreference** | \`'fullWidthOnly' | 'halfWidth' | 'thirdWidth'\` | No | \`'fullWidthOnly'\` | ${f.props.widthPreference.description} |
| **dataSource** | \`string\` | No | \`''\` | ${f.props.dataSource.description} |
| **height** | \`number\` | No | \`400\` | Height of the chart in pixels. Defaults to 400px if not specified. |

### Prop Examples

**widgetData:**
\`\`\`typescript
${f.props.widgetData.example}
\`\`\`

### Interfaces

**IDonutChartContent:**
\`\`\`typescript
${f.interfaces.IDonutChartContent}
\`\`\`

## Usage Examples

### Basic Usage
\`\`\`tsx
${f.usage.basic}
\`\`\`

## Features

${f.features}
        `}}},argTypes:{dataSource:{control:"text",description:"Data source label displayed above the widget title",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},title:{control:"text",description:"Widget title displayed in header",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},widgetData:{control:"object",description:"Primary data for the component: { content: {...}, tagName: string, subtitle?: string }"},widthPreference:{control:"select",options:["fullWidthOnly","halfWidth","thirdWidth"],description:"Controls widget width for responsive layouts",table:{type:{summary:"WidthPreferenceEnum"},defaultValue:{summary:"fullWidthOnly"}}},className:{control:"text",description:"Additional CSS class for custom styling",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},height:{control:"number",description:"Height of the chart in pixels",table:{type:{summary:"number"},defaultValue:{summary:"400"}}}}},D={diveLink:{url:"https://elevate.flqa.net/reports/participant-status-by-plan",text:"View Calibration Plans Report"},donuts:[{slices:[{key:"Mathematics",value:85},{key:"Science",value:92},{key:"English",value:78},{key:"History",value:88}],label:"Student Performance"}],options:{isLegendOnBottom:!1,numberLegendItems:!1,isMoney:!1}},Lt={diveLink:{url:"https://pdmsawsstage.mylearningplan.com/temporary",text:"Destination TBD"},donuts:[{slices:[{key:"Q1",value:45},{key:"Q2",value:55}],label:"District A"},{slices:[{key:"Q1",value:10},{key:"Q2",value:90}],label:"District B"}],options:{isLegendOnBottom:!0}},Je={diveLink:{url:"https://elevate.flqa.net/reports/participant-status-by-plan",text:"View Calibration Plans Report"},donuts:[{slices:[{key:"Salaries",value:25e4},{key:"Benefits",value:75e3},{key:"Supplies",value:45e3},{key:"Technology",value:3e4}],label:"Budget Allocation"}],options:{isMoney:!0,innerLabel:"Total Budget"}},P={name:"Fully populated Donut Chart",args:{dataSource:"Professional Growth",title:"Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:D,subtitle:"Fully populated donut chart"},widthPreference:z.fullWidthOnly,className:""}},L={name:"Tabbed Views",args:{dataSource:"Professional Growth",title:"Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:[{tabTitle:"Single",diveLink:{url:"https://elevate.flqa.net/reports/participant-status-by-plan",text:"View Report"},donuts:[{slices:[{key:"Mathematics",value:85},{key:"Science",value:92},{key:"English",value:78},{key:"History",value:88}],label:"Student Performance"}],options:{isLegendOnBottom:!1}},{tabTitle:"Double",diveLink:{url:"/reports/participant-status-by-plan",text:"Composite Score Explorer"},donuts:[{slices:[{key:"Q1",value:45},{key:"Q2",value:55}],label:"District A"},{slices:[{key:"Q1",value:40},{key:"Q2",value:60}],label:"District B"}],options:{isLegendOnBottom:!0}},{tabTitle:"No Content",diveLink:{url:"/reports/participant-status-by-plan",text:"Composite Score Explorer"},donuts:[]}],subtitle:"Tabbed donut chart"},widthPreference:void 0,className:""},parameters:{docs:{description:{story:`
**Tabbed Views** - Demonstrates multiple chart views in a single widget:
- Three separate chart configurations
- Interactive tab navigation
- Different donut data per tab
- Independent chart options
- Seamless switching between views

Perfect for dashboards that need to show multiple related datasets in a compact space.
        `}}}},k={args:{dataSource:"Recruitment and Hiring",title:"Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:{...D,options:{...D.options,isLegendOnBottom:!0}},subtitle:"Donut chart with legend on bottom"},widthPreference:void 0,className:""}},H={args:{dataSource:"Absence and Time",title:"Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:Je,subtitle:"Donut chart with money format"},widthPreference:void 0,className:""}},I={name:"Double Donut Chart",args:{dataSource:"Sample DataSource",title:"Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:Lt,subtitle:"Double donut chart with labels"},widthPreference:void 0,className:""}},M={name:"Empty Donut Chart",args:{dataSource:"",title:"Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:{diveLink:{url:"https://elevate.flqa.net/reports/participant-status-by-plan",text:"View Calibration Plans Report"},donuts:[]},subtitle:"donuts[] is empty"},widthPreference:void 0,className:""}},B={name:"Slices Total Is Zero",args:{dataSource:"",title:"Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:{diveLink:{url:"https://elevate.flqa.net/reports/participant-status-by-plan",text:"View Calibration Plans Report"},donuts:[{slices:[{key:"Scored",value:0},{key:"Auto-Pending",value:0},{key:"Submitted",value:0}]}],options:{numberLegendItems:!0}},subtitle:"Cypress: Zero Total"},widthPreference:void 0,className:""},parameters:{docs:{description:{story:"Matches the 'zeroTotal()' scenario from cypress fixtures - all donut chart values equal 0."}}}},x={dataSource:"Professional Growth",title:"Left Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:D,subtitle:"Fully populated donut chart"},widthPreference:z.fullWidthOnly,className:""},N={dataSource:"Recruitment and Hiring",title:"Right Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:Lt,subtitle:"Double donut chart with labels"},widthPreference:void 0,className:""},E={parameters:{controls:{include:["leftDataSource","leftTitle","leftWidgetData","leftWidthPreference","leftClassName","leftHeight","rightDataSource","rightTitle","rightWidgetData","rightWidthPreference","rightClassName","rightHeight"]}},argTypes:{leftDataSource:{control:"text",description:"Data source for left chart",table:{category:"Left Donut Chart"}},leftTitle:{control:"text",description:"Title for left chart",table:{category:"Left Donut Chart"}},leftWidgetData:{control:"object",description:"Widget data for left chart",table:{category:"Left Donut Chart"}},leftWidthPreference:{control:"select",options:["fullWidthOnly","halfWidth","thirdWidth"],description:"Width preference for left chart",table:{category:"Left Donut Chart"}},leftClassName:{control:"text",description:"CSS class for left chart",table:{category:"Left Donut Chart"}},leftHeight:{control:"number",description:"Height for left chart",table:{category:"Left Donut Chart"}},rightDataSource:{control:"text",description:"Data source for right chart",table:{category:"Right Donut Chart"}},rightTitle:{control:"text",description:"Title for right chart",table:{category:"Right Donut Chart"}},rightWidgetData:{control:"object",description:"Widget data for right chart",table:{category:"Right Donut Chart"}},rightWidthPreference:{control:"select",options:["fullWidthOnly","halfWidth","thirdWidth"],description:"Width preference for right chart",table:{category:"Right Donut Chart"}},rightClassName:{control:"text",description:"CSS class for right chart",table:{category:"Right Donut Chart"}},rightHeight:{control:"number",description:"Height for right chart",table:{category:"Right Donut Chart"}}},args:{leftDataSource:x.dataSource,leftTitle:x.title,leftWidgetData:x.widgetData,leftWidthPreference:x.widthPreference,leftClassName:x.className,leftHeight:235,rightDataSource:N.dataSource,rightTitle:N.title,rightWidgetData:N.widgetData,rightWidthPreference:N.widthPreference,rightClassName:N.className,rightHeight:250},render:t=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .custom-half-width-donutchart {
            width: calc(50% - 20px) !important;
            position: relative;
            border: 1px solid #c0c8cf;
            border-radius: 3px;
            background-color: #fff;
            padding: 20px;
            float: left;
          }
        `}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(y,{dataSource:t.leftDataSource,title:t.leftTitle,widgetData:t.leftWidgetData,widthPreference:t.leftWidthPreference,className:t.leftClassName||"custom-half-width-donutchart",height:t.leftHeight}),e.jsx(y,{dataSource:t.rightDataSource,title:t.rightTitle,widgetData:t.rightWidgetData,widthPreference:t.rightWidthPreference,className:t.rightClassName||"custom-half-width-donutchart",height:t.rightHeight})]})]})},O={name:"Custom Height (250px)",args:{dataSource:"Professional Growth",title:"Tall Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:D,subtitle:"Chart with 250px height"},widthPreference:void 0,className:"",height:250},parameters:{docs:{description:{story:`
Demonstrates a custom height of 250px. The height prop allows you to control the vertical size of the chart.
        `}}}},j={name:"Compact Height (200px)",args:{dataSource:"Compact View",title:"Compact Donut Chart",widgetData:{tagName:"cmp-donut-chart",content:D,subtitle:"Chart with 200px height"},widthPreference:void 0,className:"",height:200},parameters:{docs:{description:{story:`
Demonstrates a compact height of 200px. Useful for dashboards where space is limited.
        `}}}},A={name:"Variable Heights Comparison",parameters:{controls:{include:["1dataSource","1title","1widgetData","1widthPreference","1className","1height","2dataSource","2title","2widgetData","2widthPreference","2className","2height","3dataSource","3title","3widgetData","3widthPreference","3className","3height"]},docs:{description:{story:`
Compares different height configurations side by side:
- **Default (400px)**: Standard chart height for most use cases
- **Tall (250px)**: Extended height for detailed views
- **Compact (200px)**: Minimal height for space-constrained layouts
        `}}},argTypes:{"1dataSource":{control:"text",description:"Data source for chart 1",table:{category:"Default Height"}},"1title":{control:"text",description:"Title for chart 1",table:{category:"Default Height"}},"1widgetData":{control:"object",description:"Widget data for chart 1",table:{category:"Default Height"}},"1widthPreference":{control:"select",options:["fullWidthOnly","halfWidth","thirdWidth"],description:"Width preference for chart 1",table:{category:"Default Height"}},"1className":{control:"text",description:"CSS class for chart 1",table:{category:"Default Height"}},"1height":{control:"number",description:"Height for chart 1",table:{category:"Default Height"}},"2dataSource":{control:"text",description:"Data source for chart 2",table:{category:"Tall Chart"}},"2title":{control:"text",description:"Title for chart 2",table:{category:"Tall Chart"}},"2widgetData":{control:"object",description:"Widget data for chart 2",table:{category:"Tall Chart"}},"2widthPreference":{control:"select",options:["fullWidthOnly","halfWidth","thirdWidth"],description:"Width preference for chart 2",table:{category:"Tall Chart"}},"2className":{control:"text",description:"CSS class for chart 2",table:{category:"Tall Chart"}},"2height":{control:"number",description:"Height for chart 2",table:{category:"Tall Chart"}},"3dataSource":{control:"text",description:"Data source for chart 3",table:{category:"Compact Chart"}},"3title":{control:"text",description:"Title for chart 3",table:{category:"Compact Chart"}},"3widgetData":{control:"object",description:"Widget data for chart 3",table:{category:"Compact Chart"}},"3widthPreference":{control:"select",options:["fullWidthOnly","halfWidth","thirdWidth"],description:"Width preference for chart 3",table:{category:"Compact Chart"}},"3className":{control:"text",description:"CSS class for chart 3",table:{category:"Compact Chart"}},"3height":{control:"number",description:"Height for chart 3",table:{category:"Compact Chart"}}},args:{"1dataSource":"Standard View","1title":"Default Height","1widgetData":{tagName:"cmp-donut-chart",content:D,subtitle:"Chart with 400px height"},"1widthPreference":void 0,"1className":"","1height":150,"2dataSource":"Extended View","2title":"Tall Chart","2widgetData":{tagName:"cmp-donut-chart",content:D,subtitle:"Chart with 600px height"},"2widthPreference":void 0,"2className":"","2height":200,"3dataSource":"Compact View","3title":"Compact Chart","3widgetData":{tagName:"cmp-donut-chart",content:D,subtitle:"Chart with 250px height"},"3widthPreference":void 0,"3className":"","3height":250},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"10px"},children:"Default Height (400px)"}),e.jsx(y,{dataSource:t["1dataSource"],title:t["1title"],widgetData:t["1widgetData"],widthPreference:t["1widthPreference"],className:t["1className"],height:t["1height"]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"10px"},children:"Tall Height (600px)"}),e.jsx(y,{dataSource:t["2dataSource"],title:t["2title"],widgetData:t["2widgetData"],widthPreference:t["2widthPreference"],className:t["2className"],height:t["2height"]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"10px"},children:"Compact Height (250px)"}),e.jsx(y,{dataSource:t["3dataSource"],title:t["3title"],widgetData:t["3widgetData"],widthPreference:t["3widthPreference"],className:t["3className"],height:t["3height"]})]})]})};var Z,J,X;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Fully populated Donut Chart',
  args: {
    dataSource: 'Professional Growth',
    title: 'Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: singleDonutData,
      subtitle: 'Fully populated donut chart'
    },
    widthPreference: WidthPreferenceEnum.fullWidthOnly,
    className: ''
  }
}`,...(X=(J=P.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var tt,et,nt;L.parameters={...L.parameters,docs:{...(tt=L.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: 'Tabbed Views',
  args: {
    dataSource: 'Professional Growth',
    title: 'Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: [{
        tabTitle: 'Single',
        diveLink: {
          url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
          text: 'View Report'
        },
        donuts: [{
          slices: [{
            key: 'Mathematics',
            value: 85
          }, {
            key: 'Science',
            value: 92
          }, {
            key: 'English',
            value: 78
          }, {
            key: 'History',
            value: 88
          }],
          label: 'Student Performance'
        }],
        options: {
          isLegendOnBottom: false
        }
      }, {
        tabTitle: 'Double',
        diveLink: {
          url: '/reports/participant-status-by-plan',
          text: 'Composite Score Explorer'
        },
        donuts: [{
          slices: [{
            key: 'Q1',
            value: 45
          }, {
            key: 'Q2',
            value: 55
          }],
          label: 'District A'
        }, {
          slices: [{
            key: 'Q1',
            value: 40
          }, {
            key: 'Q2',
            value: 60
          }],
          label: 'District B'
        }],
        options: {
          isLegendOnBottom: true
        }
      }, {
        tabTitle: 'No Content',
        diveLink: {
          url: '/reports/participant-status-by-plan',
          text: 'Composite Score Explorer'
        },
        donuts: []
      }],
      subtitle: 'Tabbed donut chart'
    },
    widthPreference: undefined,
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Tabbed Views** - Demonstrates multiple chart views in a single widget:
- Three separate chart configurations
- Interactive tab navigation
- Different donut data per tab
- Independent chart options
- Seamless switching between views

Perfect for dashboards that need to show multiple related datasets in a compact space.
        \`
      }
    }
  }
}`,...(nt=(et=L.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var at,rt,ot;k.parameters={...k.parameters,docs:{...(at=k.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    dataSource: 'Recruitment and Hiring',
    title: 'Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: {
        ...singleDonutData,
        options: {
          ...singleDonutData.options,
          isLegendOnBottom: true
        }
      },
      subtitle: 'Donut chart with legend on bottom'
    },
    widthPreference: undefined,
    className: ''
  }
}`,...(ot=(rt=k.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var it,lt,st;H.parameters={...H.parameters,docs:{...(it=H.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    dataSource: 'Absence and Time',
    title: 'Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: moneyData,
      subtitle: 'Donut chart with money format'
    },
    widthPreference: undefined,
    className: ''
  }
}`,...(st=(lt=H.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};var ct,ut,dt;I.parameters={...I.parameters,docs:{...(ct=I.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  name: 'Double Donut Chart',
  args: {
    dataSource: 'Sample DataSource',
    title: 'Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: multipleDonutsData,
      subtitle: 'Double donut chart with labels'
    },
    widthPreference: undefined,
    className: ''
  }
}`,...(dt=(ut=I.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var ht,mt,pt;M.parameters={...M.parameters,docs:{...(ht=M.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  name: 'Empty Donut Chart',
  args: {
    dataSource: '',
    title: 'Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: {
        diveLink: {
          url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
          text: 'View Calibration Plans Report'
        },
        donuts: []
      },
      subtitle: 'donuts[] is empty'
    },
    widthPreference: undefined,
    className: ''
  }
}`,...(pt=(mt=M.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var ft,gt,_t;B.parameters={...B.parameters,docs:{...(ft=B.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  name: 'Slices Total Is Zero',
  args: {
    dataSource: '',
    title: 'Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: {
        diveLink: {
          url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
          text: 'View Calibration Plans Report'
        },
        donuts: [{
          slices: [{
            key: 'Scored',
            value: 0
          }, {
            key: 'Auto-Pending',
            value: 0
          }, {
            key: 'Submitted',
            value: 0
          }]
        }],
        options: {
          numberLegendItems: true
        }
      },
      subtitle: 'Cypress: Zero Total'
    },
    widthPreference: undefined,
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: "Matches the 'zeroTotal()' scenario from cypress fixtures - all donut chart values equal 0."
      }
    }
  }
}`,...(_t=(gt=B.parameters)==null?void 0:gt.docs)==null?void 0:_t.source}}};var Dt,bt,Ct;E.parameters={...E.parameters,docs:{...(Dt=E.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['leftDataSource', 'leftTitle', 'leftWidgetData', 'leftWidthPreference', 'leftClassName', 'leftHeight', 'rightDataSource', 'rightTitle', 'rightWidgetData', 'rightWidthPreference', 'rightClassName', 'rightHeight']
    }
  },
  argTypes: {
    leftDataSource: {
      control: 'text',
      description: 'Data source for left chart',
      table: {
        category: 'Left Donut Chart'
      }
    },
    leftTitle: {
      control: 'text',
      description: 'Title for left chart',
      table: {
        category: 'Left Donut Chart'
      }
    },
    leftWidgetData: {
      control: 'object',
      description: 'Widget data for left chart',
      table: {
        category: 'Left Donut Chart'
      }
    },
    leftWidthPreference: {
      control: 'select',
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: 'Width preference for left chart',
      table: {
        category: 'Left Donut Chart'
      }
    },
    leftClassName: {
      control: 'text',
      description: 'CSS class for left chart',
      table: {
        category: 'Left Donut Chart'
      }
    },
    leftHeight: {
      control: 'number',
      description: 'Height for left chart',
      table: {
        category: 'Left Donut Chart'
      }
    },
    rightDataSource: {
      control: 'text',
      description: 'Data source for right chart',
      table: {
        category: 'Right Donut Chart'
      }
    },
    rightTitle: {
      control: 'text',
      description: 'Title for right chart',
      table: {
        category: 'Right Donut Chart'
      }
    },
    rightWidgetData: {
      control: 'object',
      description: 'Widget data for right chart',
      table: {
        category: 'Right Donut Chart'
      }
    },
    rightWidthPreference: {
      control: 'select',
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: 'Width preference for right chart',
      table: {
        category: 'Right Donut Chart'
      }
    },
    rightClassName: {
      control: 'text',
      description: 'CSS class for right chart',
      table: {
        category: 'Right Donut Chart'
      }
    },
    rightHeight: {
      control: 'number',
      description: 'Height for right chart',
      table: {
        category: 'Right Donut Chart'
      }
    }
  } as Record<string, unknown>,
  args: {
    leftDataSource: leftDonutData.dataSource,
    leftTitle: leftDonutData.title,
    leftWidgetData: leftDonutData.widgetData,
    leftWidthPreference: leftDonutData.widthPreference,
    leftClassName: leftDonutData.className,
    leftHeight: 235,
    rightDataSource: rightDonutData.dataSource,
    rightTitle: rightDonutData.title,
    rightWidgetData: rightDonutData.widgetData,
    rightWidthPreference: rightDonutData.widthPreference,
    rightClassName: rightDonutData.className,
    rightHeight: 250
  },
  render: args => <>\r
      <style>\r
        {\`
          .custom-half-width-donutchart {
            width: calc(50% - 20px) !important;
            position: relative;
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
        <DonutChart dataSource={args.leftDataSource} title={args.leftTitle} widgetData={args.leftWidgetData} widthPreference={args.leftWidthPreference} className={args.leftClassName || 'custom-half-width-donutchart'} height={args.leftHeight} />\r
        <DonutChart dataSource={args.rightDataSource} title={args.rightTitle} widgetData={args.rightWidgetData} widthPreference={args.rightWidthPreference} className={args.rightClassName || 'custom-half-width-donutchart'} height={args.rightHeight} />\r
      </div>\r
    </>
}`,...(Ct=(bt=E.parameters)==null?void 0:bt.docs)==null?void 0:Ct.source}}};var yt,wt,vt;O.parameters={...O.parameters,docs:{...(yt=O.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  name: 'Custom Height (250px)',
  args: {
    dataSource: 'Professional Growth',
    title: 'Tall Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: singleDonutData,
      subtitle: 'Chart with 250px height'
    },
    widthPreference: undefined,
    className: '',
    height: 250
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates a custom height of 250px. The height prop allows you to control the vertical size of the chart.
        \`
      }
    }
  }
}`,...(vt=(wt=O.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};var St,xt,Nt;j.parameters={...j.parameters,docs:{...(St=j.parameters)==null?void 0:St.docs,source:{originalSource:`{
  name: 'Compact Height (200px)',
  args: {
    dataSource: 'Compact View',
    title: 'Compact Donut Chart',
    widgetData: {
      tagName: 'cmp-donut-chart',
      content: singleDonutData,
      subtitle: 'Chart with 200px height'
    },
    widthPreference: undefined,
    className: '',
    height: 200
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates a compact height of 200px. Useful for dashboards where space is limited.
        \`
      }
    }
  }
}`,...(Nt=(xt=j.parameters)==null?void 0:xt.docs)==null?void 0:Nt.source}}};var Tt,Wt,Pt;A.parameters={...A.parameters,docs:{...(Tt=A.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  name: 'Variable Heights Comparison',
  parameters: {
    controls: {
      include: ['1dataSource', '1title', '1widgetData', '1widthPreference', '1className', '1height', '2dataSource', '2title', '2widgetData', '2widthPreference', '2className', '2height', '3dataSource', '3title', '3widgetData', '3widthPreference', '3className', '3height']
    },
    docs: {
      description: {
        story: \`
Compares different height configurations side by side:
- **Default (400px)**: Standard chart height for most use cases
- **Tall (250px)**: Extended height for detailed views
- **Compact (200px)**: Minimal height for space-constrained layouts
        \`
      }
    }
  },
  argTypes: {
    '1dataSource': {
      control: 'text',
      description: 'Data source for chart 1',
      table: {
        category: 'Default Height'
      }
    },
    '1title': {
      control: 'text',
      description: 'Title for chart 1',
      table: {
        category: 'Default Height'
      }
    },
    '1widgetData': {
      control: 'object',
      description: 'Widget data for chart 1',
      table: {
        category: 'Default Height'
      }
    },
    '1widthPreference': {
      control: 'select',
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: 'Width preference for chart 1',
      table: {
        category: 'Default Height'
      }
    },
    '1className': {
      control: 'text',
      description: 'CSS class for chart 1',
      table: {
        category: 'Default Height'
      }
    },
    '1height': {
      control: 'number',
      description: 'Height for chart 1',
      table: {
        category: 'Default Height'
      }
    },
    '2dataSource': {
      control: 'text',
      description: 'Data source for chart 2',
      table: {
        category: 'Tall Chart'
      }
    },
    '2title': {
      control: 'text',
      description: 'Title for chart 2',
      table: {
        category: 'Tall Chart'
      }
    },
    '2widgetData': {
      control: 'object',
      description: 'Widget data for chart 2',
      table: {
        category: 'Tall Chart'
      }
    },
    '2widthPreference': {
      control: 'select',
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: 'Width preference for chart 2',
      table: {
        category: 'Tall Chart'
      }
    },
    '2className': {
      control: 'text',
      description: 'CSS class for chart 2',
      table: {
        category: 'Tall Chart'
      }
    },
    '2height': {
      control: 'number',
      description: 'Height for chart 2',
      table: {
        category: 'Tall Chart'
      }
    },
    '3dataSource': {
      control: 'text',
      description: 'Data source for chart 3',
      table: {
        category: 'Compact Chart'
      }
    },
    '3title': {
      control: 'text',
      description: 'Title for chart 3',
      table: {
        category: 'Compact Chart'
      }
    },
    '3widgetData': {
      control: 'object',
      description: 'Widget data for chart 3',
      table: {
        category: 'Compact Chart'
      }
    },
    '3widthPreference': {
      control: 'select',
      options: ['fullWidthOnly', 'halfWidth', 'thirdWidth'],
      description: 'Width preference for chart 3',
      table: {
        category: 'Compact Chart'
      }
    },
    '3className': {
      control: 'text',
      description: 'CSS class for chart 3',
      table: {
        category: 'Compact Chart'
      }
    },
    '3height': {
      control: 'number',
      description: 'Height for chart 3',
      table: {
        category: 'Compact Chart'
      }
    }
  } as Record<string, unknown>,
  args: {
    '1dataSource': 'Standard View',
    '1title': 'Default Height',
    '1widgetData': {
      tagName: 'cmp-donut-chart',
      content: singleDonutData,
      subtitle: 'Chart with 400px height'
    },
    '1widthPreference': undefined,
    '1className': '',
    '1height': 150,
    '2dataSource': 'Extended View',
    '2title': 'Tall Chart',
    '2widgetData': {
      tagName: 'cmp-donut-chart',
      content: singleDonutData,
      subtitle: 'Chart with 600px height'
    },
    '2widthPreference': undefined,
    '2className': '',
    '2height': 200,
    '3dataSource': 'Compact View',
    '3title': 'Compact Chart',
    '3widgetData': {
      tagName: 'cmp-donut-chart',
      content: singleDonutData,
      subtitle: 'Chart with 250px height'
    },
    '3widthPreference': undefined,
    '3className': '',
    '3height': 250
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: '10px'
      }}>Default Height (400px)</h4>\r
        <DonutChart dataSource={args['1dataSource']} title={args['1title']} widgetData={args['1widgetData']} widthPreference={args['1widthPreference']} className={args['1className']} height={args['1height']} />\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '10px'
      }}>Tall Height (600px)</h4>\r
        <DonutChart dataSource={args['2dataSource']} title={args['2title']} widgetData={args['2widgetData']} widthPreference={args['2widthPreference']} className={args['2className']} height={args['2height']} />\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: '10px'
      }}>Compact Height (250px)</h4>\r
        <DonutChart dataSource={args['3dataSource']} title={args['3title']} widgetData={args['3widgetData']} widthPreference={args['3widthPreference']} className={args['3className']} height={args['3height']} />\r
      </div>\r
    </div>
}`,...(Pt=(Wt=A.parameters)==null?void 0:Wt.docs)==null?void 0:Pt.source}}};const cn=["Default","TabbedChart","LegendOnBottom","WithMoneyFormat","MultipleDonutCharts","EmptyData","CypressZeroTotal","TwoDonutChartsSideBySide","CustomHeight","CompactHeight","VariableHeights"];export{j as CompactHeight,O as CustomHeight,B as CypressZeroTotal,P as Default,M as EmptyData,k as LegendOnBottom,I as MultipleDonutCharts,L as TabbedChart,E as TwoDonutChartsSideBySide,A as VariableHeights,H as WithMoneyFormat,cn as __namedExportsOrder,sn as default};
