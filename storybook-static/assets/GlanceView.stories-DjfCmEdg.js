import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-D2KL6ZxC.js";import{F as E,a as V}from"./index-D9nMG-SM.js";import{p as r}from"./css-G1XIyj84.js";import{H as I}from"./hcm-react-components.es-LSzeGnZd.js";import{N as F}from"./NoContent-2ZeuBHbV.js";import{D as q}from"./DiveLink-C71QaMM9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BSIYyDkJ.js";import"./index-mPXVppUW.js";const O="glanceView-module__badge__ZUcqG",a={"glance-wrapper":"glanceView-module__glance-wrapper__cMSVr","glance-heading":"glanceView-module__glance-heading__AJmm-","glance-data-source":"glanceView-module__glance-data-source__pLGqB","glance-columns":"glanceView-module__glance-columns__gtOSn","glance-left":"glanceView-module__glance-left__HXXBY","glance-right":"glanceView-module__glance-right__ptbtx","glance-row":"glanceView-module__glance-row__DGs2d","glance-section":"glanceView-module__glance-section__-qGWR","glance-item":"glanceView-module__glance-item__0VkvM","glance-divider":"glanceView-module__glance-divider__MsYZd","inline-list":"glanceView-module__inline-list__kDQbw","glance-group":"glanceView-module__glance-group__ZrFIr","glance-section-spaced":"glanceView-module__glance-section-spaced__MycMo","glance-section-grouped":"glanceView-module__glance-section-grouped__tLKfx","icon-placeholder":"glanceView-module__icon-placeholder__UpQKX","badge-container":"glanceView-module__badge-container__gG7RT",badge:O,"subtitle-text":"glanceView-module__subtitle-text__pEvpY"},P=t=>{const i=c.useMemo(()=>{const o=t.split("").reduce((e,s)=>(e<<5)-e+s.charCodeAt(0)|0,0);return`dynamic-style-${Math.abs(o)}`},[t]);return c.useEffect(()=>{if(document.head.querySelector(`[data-dynamic-class="${i}"]`))return;const e=document.createElement("style");return e.setAttribute("data-dynamic-class",i),e.innerHTML=`.${i} { ${t} }`,document.head.appendChild(e),()=>{const s=document.head.querySelector(`[data-dynamic-class="${i}"]`);s&&document.head.removeChild(s)}},[t,i]),i},p=({badgeText:t,badgeStyles:i,fieldIndex:o})=>{const e=P(i||"");return n.jsx(I,{badgeStyle:`${a.badge} ${e}`,badge:t,id:`badge-${t}-${o}`})};p.__docgenInfo={description:"",methods:[],displayName:"DynamicBadge",props:{badgeText:{required:!0,tsType:{name:"string"},description:""},badgeStyles:{required:!1,tsType:{name:"string"},description:""},fieldIndex:{required:!0,tsType:{name:"number"},description:""}}};const A=({data:t})=>n.jsx("div",{className:a["glance-left"],"data-testid":"glance-view-left",children:t.map((i,o)=>!i.fields||i.fields.length===0?null:n.jsx("div",{className:a["glance-group"],children:i.fields.map((e,s)=>n.jsx("div",{className:`${a["inline-list"]} ${a["glance-section"]} ${s===0&&i.fields.length>1||s>0?a["glance-section-grouped"]:a["glance-section-spaced"]}`,children:n.jsxs("div",{className:a["glance-row"],children:[s===0?e.icon&&n.jsx(E,{icon:V[e.icon]}):n.jsx("span",{className:a["icon-placeholder"],"aria-hidden":"true"}),n.jsxs("div",{className:a["glance-item"],children:[e.badgeText&&n.jsx("span",{className:a["badge-container"],children:n.jsx(p,{badgeText:e.badgeText,badgeStyles:e.badgeStyles||"",fieldIndex:s})}),(e.value||e.diveLink)&&n.jsxs("span",{className:a["item-value"],style:e.valueStyles?r(e.valueStyles):void 0,children:[e.value&&e.isEmail?n.jsx("a",{href:`mailto:${e.value}`,children:e.value}):e.value,e.diveLink&&n.jsxs(n.Fragment,{children:[e.value?" ":"",n.jsx("a",{href:e.diveLink.url,target:e.diveLink.isExternal?"_blank":"_self",rel:e.diveLink.isExternal?"noopener noreferrer":void 0,style:e.diveLink.style?r(e.diveLink.style):void 0,children:e.diveLink.text})]})]}),e.subtitle&&n.jsx("span",{className:a["subtitle-text"],style:e.subtitleStyles?r(e.subtitleStyles):void 0,children:e.subtitle})]})]})},`${o}-${s}`))},`group-${o}`))});A.__docgenInfo={description:"",methods:[],displayName:"GlanceViewLeft",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"DisplayData"}],raw:"DisplayData[]"},description:""}}};const M=({data:t})=>n.jsx("div",{className:a["glance-right"],"data-testid":"glance-view-right",children:t.map((i,o)=>!i.fields||i.fields.length===0?null:n.jsx("div",{className:a["glance-group"],children:i.fields.map((e,s)=>n.jsx("div",{className:`${a["inline-list"]}  ${a["glance-section"]} ${s===0&&i.fields.length>1||s>0?a["glance-section-grouped"]:a["glance-section-spaced"]}`,children:n.jsxs("div",{className:a["glance-row"],children:[s===0?e.icon&&n.jsx(E,{icon:V[e.icon]}):n.jsx("span",{className:a["icon-placeholder"],"aria-hidden":"true"}),n.jsxs("div",{className:a["glance-item"],children:[e.badgeText&&n.jsx("span",{className:a["badge-container"],children:n.jsx(p,{badgeText:e.badgeText,badgeStyles:e.badgeStyles,fieldIndex:s})}),(e.value||e.diveLink)&&n.jsxs("span",{className:a["item-value"],style:e.valueStyles?r(e.valueStyles):void 0,children:[e.value,e.diveLink&&n.jsxs(n.Fragment,{children:[e.value?" ":"",n.jsx("a",{href:e.diveLink.url,target:e.diveLink.isExternal?"_blank":"_self",rel:e.diveLink.isExternal?"noopener noreferrer":void 0,style:e.diveLink.style?r(e.diveLink.style):void 0,children:e.diveLink.text})]})]}),e.subtitle&&n.jsx("span",{className:`${a["subtitle-text"]}`,style:e.subtitleStyles?r(e.subtitleStyles):void 0,children:e.subtitle})]})]})},`${o}-${s}`))},`group-${o}`))});M.__docgenInfo={description:"",methods:[],displayName:"GlanceViewRight",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"DisplayData"}],raw:"DisplayData[]"},description:""}}};const j=({widgetData:t,title:i,dataSource:o="",noContentText:e="No content available",className:s=""})=>{const[G,R]=c.useState(!1),h=c.useCallback(()=>{if(!t)return!0;const l=t.content.left&&t.content.left.length>0,$=t.content.right&&t.content.right.length>0;return!l&&!$},[t]),D=()=>{const l=t==null?void 0:t.content;return!l||!l.diveLink?null:n.jsx(q,{diveLink:l.diveLink,className:"dive-link-glance-view",dataTestId:"glance-view-dive-link"})};return c.useEffect(()=>{const l=h();R(l)},[t,h]),n.jsxs("div",{className:`${a["glance-wrapper"]} ${s}`,"data-testid":"glance-view-root",children:[o&&n.jsx("h4",{className:a["glance-data-source"],children:o}),i&&n.jsx("h3",{className:a["glance-heading"],children:i}),G?n.jsx(F,{noContentText:e}):n.jsxs("div",{className:a["glance-columns"],children:[(t==null?void 0:t.content.left)&&t.content.left.length>0&&n.jsx(A,{data:t.content.left}),(t==null?void 0:t.content.left)&&t.content.left.length>0&&(t==null?void 0:t.content.right)&&t.content.right.length>0&&n.jsx("div",{className:a["glance-divider"],"aria-hidden":"true","data-testid":"glance-view-divider"}),(t==null?void 0:t.content.right)&&t.content.right.length>0&&n.jsx(M,{data:t.content.right})]}),n.jsx("div",{className:`${a["glance-view-dive-link"]}`,children:D()})]})};j.__docgenInfo={description:"",methods:[],displayName:"GlanceView",props:{widgetData:{required:!1,tsType:{name:"IGlanceViewWidgetData"},description:""},noContentText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No content available'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},dataSource:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const J={title:"Components/GlanceView",component:j,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
# GlanceView Component

The GlanceView component displays key information in a two-column layout, perfect for dashboard widgets that need to show important data at a glance.

## Key Features
- **Two-Column Layout**: Left and right sections for organized information display
- **Icon Support**: FontAwesome icons for visual enhancement
- **Flexible Content**: Supports values, subtitles with custom styles
- **Badge Integration**: Support for status badges with custom styles
- **Dive Link**: Optional navigation link for additional details
- **Responsive Design**: Adapts to different screen sizes
- **Type-Safe**: Full TypeScript support with comprehensive interfaces

## Layout Structure
- **Left Column**: Typically used for contact information (phone, email, address)
- **Right Column**: Usually displays work-related information (job title, department, dates)
- **Divider**: Visual separator between the two columns

## Props

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| **dataSource** | \`string\` | No | \`''\` | Data source label displayed above the title |
| **title** | \`string\` | No | \`undefined\` | Widget title displayed in header |
| **widgetData** | \`IGlanceViewWidgetData\` | No | \`undefined\` | Configuration object: { content: { left: [...], right: [...], diveLink?: {...} }, tagName: string } |
| **noContentText** | \`string\` | No | \`'No content available'\` | Message shown when no content is available |
| **className** | \`string\` | No | \`''\` | Additional CSS class for custom styling |

## Data Structure

### IGlanceViewWidgetData
| Property | Type | Description |
|----------|------|-------------|
| **content** | \`IGlanceViewContent\` | Content configuration with left and right columns |
| **tagName** | \`string\` | Component tag name identifier |
| **subtitle** | \`string\` | Optional subtitle text |

### IGlanceViewContent
| Property | Type | Description |
|----------|------|-------------|
| **left** | \`DisplayData[]\` | Array of display data sections for the left column |
| **right** | \`DisplayData[]\` | Array of display data sections for the right column |
| **diveLink** | \`IUrlAndText\` | Optional navigation link displayed at the bottom of the widget |

### IUrlAndText
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **text** | \`string\` | Yes | Link text to display |
| **url** | \`string\` | Yes | URL to navigate to |
| **isExternal** | \`boolean\` | No | If true, opens link in new tab with security attributes |

### DisplayData
| Property | Type | Description |
|----------|------|-------------|
| **fields** | \`DisplayField[]\` | Array of fields within this display section |

### DisplayField
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **value** | \`string\` | No | Main content value |
| **icon** | \`string\` | No | FontAwesome icon identifier (faPhone, faEnvelope, faHouseChimney, faCalendarDays, faIdCardClip, faBriefcase, faUserGroup) |
| **subtitle** | \`string\` | No | Additional context or secondary information |
| **valueStyles** | \`string\` | No | CSS styles for the value text |
| **subtitleStyles** | \`string\` | No | CSS styles for the subtitle text |
| **badgeText** | \`string\` | No | Badge text content |
| **badgeStyles** | \`string\` | No | CSS styles for the badge |
| **isEmail** | \`boolean\` | No | If true, formats the value as an email link |
| **diveLink** | \`IUrlAndText\` | No | Optional link to display after the value text, concatenated with a space (supports url, text, isExternal, and style properties) |

## FontAwesome Icons

For FontAwesome icons, visit the [official FontAwesome website](https://fontawesome.com/), browse and select the icon you want to use, then click on the **React** tab to get the correct icon name. Use this icon name as the value for the \`icon\` property.

**Example**: For a house icon, go to fontawesome.com → search "house" → click on the icon → click "React" tab → use the icon name (e.g., "faHouseChimney") as your icon value.

**Note**: Currently, the GlanceView component supports FontAwesome Pro Solid SVG icons (\`@fortawesome/pro-solid-svg-icons\`). Please ensure you select icons from the **Solid** style when browsing the FontAwesome website.

## Usage

\`\`\`tsx
import GlanceView from './GlanceView';

const widgetData = {
  left: [
    {
      fields: [
        {
          value: '555-123-4567',
          icon: 'faPhone',
          subtitle: 'Organization',
          subtitleStyles: 'margin-left: 8px; color: #65727d; font-size: 1.5rem;',
          diveLink: {
            text: 'Call',
            url: 'tel:555-123-4567',
            isExternal: true,
            style: 'color: #2e7ab8; text-decoration: underline; font-weight: bold;'
          }
        }
      ]
    }
  ],
  right: [
    {
      fields: [
        {
          value: 'Senior Developer',
          icon: 'faBriefcase',
          badgeText: 'Active',
          badgeStyles: 'background-color: #2e7ab8; color: #fafbfb;'
        }
      ]
    }
  ],
  diveLink: {
    text: 'View Details',
    url: '/employee/details',
    isExternal: false
  }
};

<GlanceView widgetData={widgetData} title="Employee Info" />
\`\`\`
        `}}},argTypes:{dataSource:{control:"text",description:"Data source label displayed above the widget title",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},title:{control:"text",description:"Widget title displayed in header",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},widgetData:{control:{type:"object"},description:"Primary data for the component: { content: { left: [...], right: [...], diveLink?: {...} }, tagName: string }"},noContentText:{control:"text",description:"Message shown when no content is available",table:{type:{summary:"string"},defaultValue:{summary:'"No content available"'}}},className:{control:"text",description:"Additional CSS class for custom styling",table:{type:{summary:"string"},defaultValue:{summary:'""'}}}}},f={diveLink:{url:"https://elevate.flqa.net/reports/participant-status-by-plan",text:"Manage Settings"},left:[{fields:[{value:"(345) 345-3456, Ext. 123",icon:"faPhone",subtitle:"Organization",subtitleStyles:"margin-left: 8px; color: #65727d; font-size: 1.5rem;"}]},{fields:[{value:"abc@abc.com",icon:"faEnvelope",subtitle:"Organization",subtitleStyles:"margin-left: 8px; color: #65727d; font-size: 1.5rem;",isEmail:!0},{value:"xyz@abc.com",icon:"",subtitle:"Personal",subtitleStyles:"margin-left: 8px; color: #65727d; font-size: 1.5rem;",isEmail:!0}]},{fields:[{value:"tst2, 453",icon:"faHouseChimney"},{value:"albama, AL"},{value:"Changing on 12/31/2025",valueStyles:"color: #c26b13; font-size: 1.3rem;"}]}],right:[{fields:[{value:"Volunteer - Probationary Teacher since 9/1/2025",icon:"faIdCardClip"},{value:"Substitute - Probationary Teacher, starting 12/1/2025",badgeText:"Upcoming",badgeStyles:"background-color: #2e7ab8; color: #fafbfb;"}]},{fields:[{value:"AdminPosition_User at Elm Elementary",icon:"faBriefcase"},{value:"Art Teacher at Steve Location, starting 12/10/2025",badgeText:"Upcoming",badgeStyles:"background-color: #2e7ab8; color: #fafbfb;"}]},{fields:[{value:"Hire Date: 1/17/2020",icon:"faCalendarDays"}]}]},d={args:{dataSource:"HR MANAGEMENT SYSTEM",title:"Staff Member Overview",widgetData:{tagName:"cmp-glance-view",content:f},noContentText:"",className:""}},u={args:{dataSource:"HR MANAGEMENT SYSTEM",title:"Staff Member Overview",widgetData:{tagName:"cmp-glance-view",content:{left:f.left,right:[],diveLink:{url:"https://elevate.flqa.net/reports/participant-status-by-plan",text:"Manage Settings"}}},noContentText:"",className:""}},m={args:{dataSource:"HR MANAGEMENT SYSTEM",title:"Staff Member Overview",widgetData:{tagName:"cmp-glance-view",content:{left:[],right:f.right,diveLink:{url:"https://elevate.flqa.net/reports/participant-status-by-plan",text:"Manage Settings"}}},noContentText:"",className:""}},g={args:{widgetData:{tagName:"cmp-glance-view",content:{left:[{fields:[{value:"Absence Identifier: 3026827",icon:"faIdCardClip",diveLink:{url:"#",text:"Learn More",isExternal:!0,style:"color:#20242b; text-decoration: underline; text-underline-offset: 16%; text-decoration-thickness: 7.5%; text-decoration-skip-ink: auto; border-bottom: none; box-shadow: none;"}}]},{fields:[{value:"Ratings Not Enabled",icon:"faStar",diveLink:{url:"#",text:"Learn More",isExternal:!0,style:"border-bottom: 1px solid transparent; color: #2e7ab8; text-decoration: none"}}]}],right:[{fields:[{value:"Performance Review Status",icon:"faClipboardCheck",diveLink:{url:"#",text:"Configure",isExternal:!0,style:"color: #0d8f2e; font-style: italic;"}}]}]}},title:"System Settings",dataSource:"CONFIGURATION"}};var v,y,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    dataSource: 'HR MANAGEMENT SYSTEM',
    title: 'Staff Member Overview',
    widgetData: {
      tagName: 'cmp-glance-view',
      content: sampleStaffData
    },
    noContentText: '',
    className: ''
  }
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,S,N;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    dataSource: 'HR MANAGEMENT SYSTEM',
    title: 'Staff Member Overview',
    widgetData: {
      tagName: 'cmp-glance-view',
      content: {
        left: sampleStaffData.left,
        right: [],
        diveLink: {
          url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
          text: 'Manage Settings'
        }
      }
    },
    noContentText: '',
    className: ''
  }
}`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,_,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    dataSource: 'HR MANAGEMENT SYSTEM',
    title: 'Staff Member Overview',
    widgetData: {
      tagName: 'cmp-glance-view',
      content: {
        left: [],
        right: sampleStaffData.right,
        diveLink: {
          url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
          text: 'Manage Settings'
        }
      }
    },
    noContentText: '',
    className: ''
  }
}`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var T,C,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    widgetData: {
      tagName: 'cmp-glance-view',
      content: {
        left: [{
          fields: [{
            value: 'Absence Identifier: 3026827',
            icon: 'faIdCardClip',
            diveLink: {
              url: '#',
              text: 'Learn More',
              isExternal: true,
              style: 'color:#20242b; text-decoration: underline; text-underline-offset: 16%; text-decoration-thickness: 7.5%; text-decoration-skip-ink: auto; border-bottom: none; box-shadow: none;'
            }
          }]
        }, {
          fields: [{
            value: 'Ratings Not Enabled',
            icon: 'faStar',
            diveLink: {
              url: '#',
              text: 'Learn More',
              isExternal: true,
              style: 'border-bottom: 1px solid transparent; color: #2e7ab8; text-decoration: none'
            }
          }]
        }],
        right: [{
          fields: [{
            value: 'Performance Review Status',
            icon: 'faClipboardCheck',
            diveLink: {
              url: '#',
              text: 'Configure',
              isExternal: true,
              style: 'color: #0d8f2e; font-style: italic;'
            }
          }]
        }]
      }
    },
    title: 'System Settings',
    dataSource: 'CONFIGURATION'
  }
}`,...(L=(C=g.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const ee=["Default","OnleLeftDataAvailable","OnleRightDataAvailable","WithLinkInField"];export{d as Default,u as OnleLeftDataAvailable,m as OnleRightDataAvailable,g as WithLinkInField,ee as __namedExportsOrder,J as default};
