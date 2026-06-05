import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-D2KL6ZxC.js";import{d as v}from"./logger-B8LV6ilf.js";import"./preload-helper-Dp1pzeXC.js";const n={"quick-links-widget":"QuickLinks-module__quick-links-widget__DPpd5","quick-links-error":"QuickLinks-module__quick-links-error__J9JpP","error-message":"QuickLinks-module__error-message__yUNjx","link-list":"QuickLinks-module__link-list__ZfrVL","link-list-vertical":"QuickLinks-module__link-list-vertical__a115F","link-list-horizontal":"QuickLinks-module__link-list-horizontal__iMuhC","link-container":"QuickLinks-module__link-container__ZLXlr","link-icon":"QuickLinks-module__link-icon__4vBhS","link-text":"QuickLinks-module__link-text__Qv8CX","link-title":"QuickLinks-module__link-title__ZrY7I","link-subtitle":"QuickLinks-module__link-subtitle__9Qa15","subtitle-content":"QuickLinks-module__subtitle-content__bp4Hr","subtitle-text":"QuickLinks-module__subtitle-text__oD0Ab","subtitle-icon":"QuickLinks-module__subtitle-icon__saNva","quick-links-no-content":"QuickLinks-module__quick-links-no-content__1ViFY","no-content-image":"QuickLinks-module__no-content-image__ws-oI"},y={shouldShowNoContentMessage:s=>!s||!s.links||!s.links.length?(v.warn("quick-links-widget: content data is missing"),!0):!1,validateLinks:s=>{let a=!0;return s.links.forEach(l=>{var r;(r=l.url)!=null&&r.url&&!l.url.url.startsWith("http://")&&!l.url.url.startsWith("https://")&&(v.warn(`quick-links-widget: link requires that the url string include http:// or https://. ${l.url.url} is invalid`),a=!1)}),a}},H=({widgetData:s,noContentText:a="No quick links available",hideNoContentImage:l=!1,onLinkClick:r,className:o="quick-links-widget",alignment:W="vertical"})=>{const[F,B]=c.useState([]),[O,G]=c.useState(!1),[J,Y]=c.useState(!0),x=c.useCallback(i=>{if(i!=null&&i.links){B(i.links);const b=y.validateLinks(i);Y(b)}},[]);return c.useEffect(()=>{s&&x(s.content),G(y.shouldShowNoContentMessage(s==null?void 0:s.content))},[s,x]),O?t.jsx("div",{className:`${n["quick-links-widget"]} theme-default ${o}`.trim(),children:t.jsxs("div",{className:n["quick-links-no-content"],children:[!l&&t.jsx("div",{className:n["no-content-image"]}),t.jsx("p",{children:a})]})}):t.jsxs("div",{className:`${n["quick-links-widget"]} theme-default ${o}`.trim(),children:[!J&&t.jsx("div",{className:n["quick-links-error"],children:t.jsx("p",{className:n["error-message"],children:"⚠️ Some links have invalid URLs. Please check the console for details."})}),t.jsx("ul",{className:`${n["link-list"]} ${W==="horizontal"?n["link-list-horizontal"]:n["link-list-vertical"]} ${o}-list`.trim(),children:F.map((i,b)=>t.jsx("li",{className:n["link-container"],children:t.jsxs("a",{href:i.url.url,target:i.isExternal?"_blank":"_self",rel:i.isExternal?"noopener noreferrer":void 0,"data-testid":"quick-links-anchor",className:`${o}-anchor`.trim(),onClick:Z=>{r&&(Z.preventDefault(),r(i))},children:[t.jsx("div",{className:`${n["link-icon"]} ${o}-icon`.trim(),children:t.jsx("span",{className:i.icon??"",style:{color:i.iconColor}})}),t.jsxs("div",{className:n["link-text"],children:[t.jsx("p",{className:`${n["link-title"]} ${o}-title`.trim(),title:`${i.title} - ${i.subtitle}`,"data-testid":"quick-links-title",children:i.title}),i.subtitle&&t.jsx("p",{className:`${n["link-subtitle"]} ${o}-subtitle`.trim(),title:`${i.title} - ${i.subtitle}`,"data-testid":"quick-links-subtitle",children:t.jsxs("span",{className:n["subtitle-content"],children:[t.jsx("span",{className:n["subtitle-text"],children:i.subtitle}),t.jsx("span",{className:`${n["subtitle-icon"]} fa-angle-right`})]})})]})]})},i.linkIdentifier||b))})]})};H.__docgenInfo={description:"",methods:[],displayName:"QuickLinks",props:{widgetData:{required:!0,tsType:{name:"IQuickLinksWidgetData"},description:""},noContentText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No quick links available'",computed:!1}},hideNoContentImage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(link: IQuickLinksLink) => void",signature:{arguments:[{type:{name:"IQuickLinksLink"},name:"link"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'quick-links-widget'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const e={overview:`
    The QuickLinks component displays a list of navigational links with icons,
    titles, and subtitles. It supports both internal and external links,
    custom styling, validation, and accessibility features.
  `,usage:{basic:`
      import { QuickLinks, IQuickLinksContent } from './components/QuickLinks/QuickLinks';

      const widgetData: IQuickLinksContent = {
        links: [
          {
            linkIdentifier: 'home',
            title: 'Home',
            subtitle: 'Go to dashboard',
            icon: 'fa-home',
            iconColor: '#007bff',
            isExternal: false,
            url: { url: 'https://example.com', text: 'Home' }
          }
        ]
      };

      <QuickLinks widgetData={widgetData} />
    `,withCallback:`
      const handleLinkClick = (link: IQuickLinksLink) => {
        devLogger.log('Link clicked:', link.title);
        // Custom navigation logic
      };

      <QuickLinks
        widgetData={widgetData}
        onLinkClick={handleLinkClick}
      />
    `,customStyling:`
      <QuickLinks
        widgetData={widgetData}
        className="my-custom-links"
        noContentText="No links configured"
        hideNoContentImage={true}
      />
    `},props:{widgetData:{type:"IQuickLinksContent | undefined",description:"Data containing the quick links to display",example:`{
        links: [
          {
            linkIdentifier: 'unique-id',
            title: 'Link Title',
            subtitle: 'Link Description',
            icon: 'fa-icon-name',
            iconColor: '#hexcolor',
            isExternal: boolean,
            url: { url: 'https://...', text: 'Link Text' }
          }
        ]
      }`},noContentText:{type:"string",description:"Text to display when no links are available",default:'"No quick links available"',example:'"Configure your quick links in settings"'},hideNoContentImage:{type:"boolean",description:"Whether to hide the no content image placeholder",default:"false",example:"true"},onLinkClick:{type:"(link: IQuickLinksLink) => void",description:"Callback function called when a link is clicked. When provided, prevents default navigation.",example:"(link) => handleCustomNavigation(link)"},className:{type:"string",description:"Custom CSS class name applied to the component. Also applies suffixed classes to child elements.",default:'"quick-links-widget"',example:'"my-custom-class"',note:'When provided, creates classes like "my-custom-class-list", "my-custom-class-anchor", etc.'},alignment:{type:"'vertical' | 'horizontal'",description:"Controls the layout direction of the quick links. Vertical displays links in a column, horizontal displays them in a row.",default:'"vertical"',example:'"horizontal"'}},interfaces:{IQuickLinksContent:`
      interface IQuickLinksContent {
        links: IQuickLinksLink[];
      }
    `,IQuickLinksLink:`
      interface IQuickLinksLink {
        icon?: string | null;           // Font Awesome icon class (e.g., 'fa-home')
        iconColor: string;              // Hex color for the icon
        isExternal: boolean;            // Whether link opens in new tab
        linkIdentifier: string;         // Unique identifier for the link
        subtitle: string;               // Secondary text below title
        title: string;                  // Primary link text
        url: IUrlAndText;              // URL and display text object
      }
    `,IUrlAndText:`
      interface IUrlAndText {
        url: string;                    // The actual URL (must include http:// or https://)
        text: string;                   // Display text for the URL
      }
    `},styling:{overview:`
      The QuickLinks component uses CSS Modules for scoped styling and provides
      extensive customization through CSS variables and custom classes.
    `,cssVariables:{description:"Override these SCSS variables to customize the component appearance:",variables:{"$quick-links-icon-size":{default:"40px",description:"Size of the icon container"},"$quick-links-link-height":{default:"56px",description:"Height of each link item"},"$quick-links-margin-top":{default:"1em",description:"Top margin of the widget"},"$quick-links-bg-color":{default:"$salt300",description:"Background color of link items"},"$quick-links-border-color":{default:"#dee2e6",description:"Border color of link items"},"$quick-links-hover-border-color":{default:"$plum600",description:"Border color on hover"},"$quick-links-text-color":{default:"#495057",description:"Text color for titles and subtitles"},"$quick-links-border-radius":{default:"3px",description:"Border radius of link items"},"$quick-links-font-size":{default:"1.425rem",description:"Font size for titles"},"$quick-links-icon-font-size":{default:"35px",description:"Font size for icons"}}},customization:{variableOverride:`
        // Create a custom variables file
        // _my-quicklinks-theme.scss
        $quick-links-bg-color: #ffffff;
        $quick-links-border-color: #e1e5e9;
        $quick-links-hover-border-color: #28a745;
        $quick-links-text-color: #333333;
        $quick-links-border-radius: 8px;
        $quick-links-font-size: 1.2rem;
        $quick-links-subtitle-font-size: 1rem;

        // Import before the component
        @import 'my-quicklinks-theme';
        @import 'path/to/QuickLinks.module.scss';
      `,customClasses:`
        // Apply custom className
        <QuickLinks className="my-theme" widgetData={data} />

        // This generates the following classes:
        .my-theme              // Main container
        .my-theme-list         // List element
        .my-theme-anchor       // Link elements
        .my-theme-icon         // Icon containers
        .my-theme-title        // Title elements
        .my-theme-subtitle     // Subtitle elements

        // Style them in your CSS
        .my-theme {
          --custom-bg: #f0f8ff;
        }

        .my-theme-list {
          background: var(--custom-bg);
          padding: 16px;
          border-radius: 12px;
        }

        .my-theme-anchor:hover {
          transform: translateY(-2px);
          transition: transform 0.2s ease;
        }
      `,globalThemeOverride:`
        // For global theming, target the theme-default class
        .theme-default.quick-links-widget {
          --ql-primary-color: #007bff;
          --ql-background: #ffffff;
          --ql-border: #dee2e6;
        }

        .theme-default .link-container {
          background-color: var(--ql-background);
          border-color: var(--ql-border);
        }

        .theme-default .link-container:hover {
          border-color: var(--ql-primary-color);
        }
      `}},accessibility:{features:["Semantic HTML structure using list and link elements","Proper ARIA attributes and roles","Keyboard navigation support","Screen reader friendly text","Focus management and indicators","Title attributes for additional context"],guidelines:`
      - Always provide meaningful title and subtitle text
      - Use descriptive icon names when possible
      - Ensure sufficient color contrast for icon colors
      - Test with keyboard navigation
      - Verify screen reader compatibility
    `},validation:{urlValidation:`
      The component validates URLs and displays warnings for invalid ones:
      - URLs must start with 'http://' or 'https://'
      - Empty URLs are allowed (no validation error)
      - Invalid URLs trigger console warnings and error messages
    `,errorHandling:`
      - Missing or empty data shows configurable no-content message
      - Invalid URLs display error banner with details
      - Console warnings help with debugging
      - Graceful degradation for missing icons or properties
    `},examples:{basicUsage:{title:"Basic Usage",description:"Simple implementation with default styling",code:`
        const basicLinks = {
          links: [
            {
              linkIdentifier: 'dashboard',
              title: 'Dashboard',
              subtitle: 'View your overview',
              icon: 'fa-tachometer-alt',
              iconColor: '#007bff',
              isExternal: false,
              url: { url: 'https://app.example.com/dashboard', text: 'Dashboard' }
            }
          ]
        };

        <QuickLinks widgetData={basicLinks} />
      `},customStyling:{title:"Custom Styling",description:"Component with custom theme and styling",code:`
        <QuickLinks
          widgetData={links}
          className="custom-quicklinks"
          noContentText="No shortcuts configured"
          hideNoContentImage={true}
        />

        // CSS
        .custom-quicklinks-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .custom-quicklinks-anchor {
          transition: all 0.2s ease;
        }

        .custom-quicklinks-anchor:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `},withInteraction:{title:"Interactive Usage",description:"Component with click handling and analytics",code:`
        const handleLinkClick = (link: IQuickLinksLink) => {
          // Analytics tracking
          analytics.track('quick_link_clicked', {
            linkId: link.linkIdentifier,
            title: link.title,
            isExternal: link.isExternal
          });

          // Custom navigation
          if (link.isExternal) {
            window.open(link.url.url, '_blank');
          } else {
            router.push(link.url.url);
          }
        };

        <QuickLinks
          widgetData={widgetData}
          onLinkClick={handleLinkClick}
        />
      `},horizontalAlignment:{title:"Horizontal Layout",description:"Component with horizontal alignment of links",code:`
        <QuickLinks
          widgetData={widgetData}
          alignment="horizontal"
          className="horizontal-quicklinks"
        />

        // Optional CSS for responsive horizontal layout
        .horizontal-quicklinks-list {
          gap: 16px;
        }

        @media (max-width: 768px) {
          .horizontal-quicklinks-list {
            flex-direction: column;
          }
        }
      `}},troubleshooting:{commonIssues:{"Icons not displaying":{problem:"FL-Icons font not loaded or icon name incorrect",solution:"Ensure fc-util-styles is imported and icon names match FL-Icons font"},"Styles not applying":{problem:"CSS modules not working or variables not overridden",solution:"Check import order and ensure SCSS variables are defined before component import"},"Links not clickable":{problem:"onLinkClick handler preventing default navigation",solution:"Either remove onLinkClick for default behavior or handle navigation in callback"},"URL validation errors":{problem:"URLs missing http:// or https:// protocol",solution:"Ensure all URLs include the full protocol in the url field"}}}},ne={title:"Components/QuickLinks",component:H,parameters:{layout:"centered",docs:{description:{component:`
${e.overview}

## Props

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| **widgetData** | \`IQuickLinksContent \\| undefined\` | No | \`undefined\` | ${e.props.widgetData.description} |
| **noContentText** | \`string\` | No | \`"No quick links available"\` | ${e.props.noContentText.description} |
| **hideNoContentImage** | \`boolean\` | No | \`false\` | ${e.props.hideNoContentImage.description} |
| **onLinkClick** | \`(link: IQuickLinksLink) => void\` | No | \`undefined\` | ${e.props.onLinkClick.description} |
| **className** | \`string\` | No | \`"quick-links-widget"\` | ${e.props.className.description} |
| **alignment** | \`'vertical' \\| 'horizontal'\` | No | \`'vertical'\` | ${e.props.alignment.description} |

### Prop Examples

**widgetData:**
\`\`\`typescript
${e.props.widgetData.example}
\`\`\`

**noContentText:**
\`\`\`typescript
${e.props.noContentText.example}
\`\`\`

**className note:**
${e.props.className.note}

## Usage Examples

### Basic Usage
\`\`\`tsx
${e.usage.basic}
\`\`\`

### With Callback
\`\`\`tsx
${e.usage.withCallback}
\`\`\`

### Custom Styling
\`\`\`tsx
${e.usage.customStyling}
\`\`\`

## TypeScript Interfaces

### IQuickLinksContent
\`\`\`typescript
${e.interfaces.IQuickLinksContent}
\`\`\`

### IQuickLinksLink
\`\`\`typescript
${e.interfaces.IQuickLinksLink}
\`\`\`

### IUrlAndText
\`\`\`typescript
${e.interfaces.IUrlAndText}
\`\`\`

## Styling & Customization

${e.styling.overview}

### CSS Variables
${e.styling.cssVariables.description}

#### Available Variables:
| Variable | Default | Description |
|----------|---------|-------------|
| \`$quick-links-icon-size\` | \`${e.styling.cssVariables.variables["$quick-links-icon-size"].default}\` | ${e.styling.cssVariables.variables["$quick-links-icon-size"].description} |
| \`$quick-links-link-height\` | \`${e.styling.cssVariables.variables["$quick-links-link-height"].default}\` | ${e.styling.cssVariables.variables["$quick-links-link-height"].description} |
| \`$quick-links-margin-top\` | \`${e.styling.cssVariables.variables["$quick-links-margin-top"].default}\` | ${e.styling.cssVariables.variables["$quick-links-margin-top"].description} |
| \`$quick-links-bg-color\` | \`${e.styling.cssVariables.variables["$quick-links-bg-color"].default}\` | ${e.styling.cssVariables.variables["$quick-links-bg-color"].description} |
| \`$quick-links-border-color\` | \`${e.styling.cssVariables.variables["$quick-links-border-color"].default}\` | ${e.styling.cssVariables.variables["$quick-links-border-color"].description} |
| \`$quick-links-hover-border-color\` | \`${e.styling.cssVariables.variables["$quick-links-hover-border-color"].default}\` | ${e.styling.cssVariables.variables["$quick-links-hover-border-color"].description} |
| \`$quick-links-text-color\` | \`${e.styling.cssVariables.variables["$quick-links-text-color"].default}\` | ${e.styling.cssVariables.variables["$quick-links-text-color"].description} |
| \`$quick-links-border-radius\` | \`${e.styling.cssVariables.variables["$quick-links-border-radius"].default}\` | ${e.styling.cssVariables.variables["$quick-links-border-radius"].description} |
| \`$quick-links-font-size\` | \`${e.styling.cssVariables.variables["$quick-links-font-size"].default}\` | ${e.styling.cssVariables.variables["$quick-links-font-size"].description} |
| \`$quick-links-icon-font-size\` | \`${e.styling.cssVariables.variables["$quick-links-icon-font-size"].default}\` | ${e.styling.cssVariables.variables["$quick-links-icon-font-size"].description} |

### Variable Override Example
\`\`\`scss
${e.styling.customization.variableOverride}
\`\`\`

### Custom Classes Example
\`\`\`tsx
${e.styling.customization.customClasses}
\`\`\`

### Global Theme Override
\`\`\`scss
${e.styling.customization.globalThemeOverride}
\`\`\`

## Accessibility Features

${e.accessibility.features.map(s=>`- ${s}`).join(`
`)}

### Guidelines
${e.accessibility.guidelines}

## Validation & Error Handling

### URL Validation
${e.validation.urlValidation}

### Error Handling
${e.validation.errorHandling}

## Code Examples

### ${e.examples.basicUsage.title}
${e.examples.basicUsage.description}

\`\`\`tsx
${e.examples.basicUsage.code}
\`\`\`

### ${e.examples.customStyling.title}
${e.examples.customStyling.description}

\`\`\`tsx
${e.examples.customStyling.code}
\`\`\`

### ${e.examples.withInteraction.title}
${e.examples.withInteraction.description}

\`\`\`tsx
${e.examples.withInteraction.code}
\`\`\`

### ${e.examples.horizontalAlignment.title}
${e.examples.horizontalAlignment.description}

\`\`\`tsx
${e.examples.horizontalAlignment.code}
\`\`\`

## Troubleshooting

${Object.entries(e.troubleshooting.commonIssues).map(([s,a])=>`
### ${s}
**Problem:** ${a.problem}
**Solution:** ${a.solution}
`).join(`
`)}
        `}}},tags:["autodocs"],argTypes:{widgetData:{description:`${e.props.widgetData.description}

**Type:** \`${e.props.widgetData.type}\`
**Required:** No

**Example:**
\`\`\`typescript
${e.props.widgetData.example}
\`\`\``,control:{type:"object"}},noContentText:{description:`${e.props.noContentText.description}

**Type:** \`${e.props.noContentText.type}\`
**Required:** No
**Default:** ${e.props.noContentText.default}

**Example:** ${e.props.noContentText.example}`,control:"text"},hideNoContentImage:{description:`${e.props.hideNoContentImage.description}

**Type:** \`${e.props.hideNoContentImage.type}\`
**Required:** No
**Default:** ${e.props.hideNoContentImage.default}

**Example:** ${e.props.hideNoContentImage.example}`,control:"boolean"},onLinkClick:{description:`${e.props.onLinkClick.description}

**Type:** \`${e.props.onLinkClick.type}\`
**Required:** No

**Example:** ${e.props.onLinkClick.example}

**Note:** By default, links will navigate normally. Set this prop to override navigation behavior.`,control:{type:"object"}},className:{description:`${e.props.className.description}

**Type:** \`${e.props.className.type}\`
**Required:** No
**Default:** ${e.props.className.default}

**Example:** ${e.props.className.example}

**Note:** ${e.props.className.note}`,control:"text"},alignment:{description:`${e.props.alignment.description}

**Type:** \`${e.props.alignment.type}\`
**Required:** No
**Default:** ${e.props.alignment.default}

**Example:** ${e.props.alignment.example}`,control:{type:"select"},options:["vertical","horizontal"]}}},u={tagName:"cmp-quick-links",content:{links:[{linkIdentifier:"abs-manage-absences",title:"Manage Absences",subtitle:"Absence Management",icon:"fa-dash-partners",iconColor:"#2090D0",isExternal:!0,url:{text:"Manage Absences",url:"https://aesstage.flqa.net/navigator/reports.asp?report=dailyReport",isExternal:!0}},{linkIdentifier:"abs-create-absence",title:"Create Absence",subtitle:"Absence Management",icon:"fa-dash-calendar",iconColor:"#2090D0",isExternal:!0,url:{text:"Create Absence",url:"https://aesstage.flqa.net/navigator/admin_selectworker.asp",isExternal:!0}},{linkIdentifier:"ta-manage-timesheets",title:"Manage Timesheets",subtitle:"Time & Attendance",icon:"fa-dash-cog-clock-person",iconColor:"#2090D0",isExternal:!0,url:{text:"Manage Timesheets",url:"https://vtstage.flqa.net/TimesheetReview",isExternal:!0}},{linkIdentifier:"fc-track-forms",title:"Manage HR Forms",subtitle:"Frontline Central",icon:"fa-dash-paper-airplane",iconColor:"#7e4082",isExternal:!1,url:{text:"Manage HR Forms",url:"https://supersuitawsstage.flqa.net/ec-forms/form-templates",isExternal:!1}},{linkIdentifier:"pg-manage-pd-requests",title:"Manage PD Requests",subtitle:"Professional Growth",icon:"fa-dash-paper-stack",iconColor:"#c26b13",isExternal:!0,url:{text:"Manage PD Requests",url:"https://pdmsawsstage.mylearningplan.com/districtadmin/districtadmin.asp",isExternal:!0}},{linkIdentifier:"pg-my-pd-portfolio",title:"My PD Portfolio",subtitle:"Professional Growth",icon:"fa-dash-medal",iconColor:"#c26b13",isExternal:!0,url:{text:"My PD Portfolio",url:"https://pdmsawsstage.mylearningplan.com/learningplan/viewmyportfolio.asp",isExternal:!0}}]}},X={tagName:"cmp-quick-links",content:{links:[...u.content.links,{linkIdentifier:"pg-manage-evaluations",title:"Manage Evaluations",subtitle:"Professional Growth",icon:"fa-dash-vertical-dials",iconColor:"#c26b13",isExternal:!0,url:{text:"Manage Evaluations",url:"https://pdmsawsstage.mylearningplan.com/oasys/processview",isExternal:!0}},{linkIdentifier:"pg-my-evaluation-forms",title:"My Evaluation Forms",subtitle:"Professional Growth",icon:"fa-dash-human-graph",iconColor:"#c26b13",isExternal:!0,url:{text:"My Evaluation Forms",url:"https://pdmsawsstage.mylearningplan.com/oasys/evalprofile",isExternal:!0}},{linkIdentifier:"rh-manage-applicants",title:"Manage Applicants",subtitle:"Recruiting & Hiring",icon:"fa-dash-binocs",iconColor:"#BA4141",isExternal:!0,url:{text:"Manage Applicants",url:"http://qa.applitrack.com/recruit.authorization.openid/?organizationid=651886&Destination=AppDashboard",isExternal:!0}},{linkIdentifier:"rh-manage-job-postings",title:"Manage Job Postings",subtitle:"Recruiting & Hiring",icon:"fa-dash-bullhorn",iconColor:"#BA4141",isExternal:!0,url:{text:"Manage Job Postings",url:"http://qa.applitrack.com/recruit.authorization.openid/?organizationid=651886&Destination=JobDashboard",isExternal:!0}}]}},d={args:{widgetData:u,noContentText:"No quick links available",hideNoContentImage:!1}},k={args:{widgetData:X,noContentText:"No quick links available",hideNoContentImage:!1}},p={args:{widgetData:{tagName:"cmp-quick-links",content:{links:[]}},noContentText:"No quick links configured",hideNoContentImage:!1}},m={args:{widgetData:{tagName:"cmp-quick-links",content:{links:[{icon:"fa-home",iconColor:"#007bff",isExternal:!1,linkIdentifier:"valid-link",subtitle:"This is a valid link",title:"Valid Link",url:{text:"Valid Link",url:"https://example.com",isExternal:!1}},{icon:"fa-exclamation-triangle",iconColor:"#dc3545",isExternal:!1,linkIdentifier:"invalid-link",subtitle:"This link has an invalid URL (missing protocol)",title:"Invalid Link",url:{text:"Invalid Link",url:"example.com",isExternal:!1}}]}},noContentText:"No quick links available",hideNoContentImage:!1}},g={args:{widgetData:u,className:"custom-styled-links",noContentText:"No shortcuts configured"}},h={args:{widgetData:u,alignment:"horizontal",noContentText:"No quick links available"}},f={args:{widgetData:u,noContentText:"No quick links available",hideNoContentImage:!1},parameters:{docs:{description:{story:"This story demonstrates normal URL navigation behavior. Click on the links to navigate to their configured URLs.\n        The `onLinkClick` prop is intentionally omitted to allow default browser navigation."}}}};var $,C,L;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    widgetData: sampleWidgetData,
    noContentText: 'No quick links available',
    hideNoContentImage: false
  }
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var q,w,N;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    widgetData: fullWidgetData,
    noContentText: 'No quick links available',
    hideNoContentImage: false
  }
}`,...(N=(w=k.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var I,T,_;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    widgetData: {
      tagName: 'cmp-quick-links',
      content: {
        links: []
      }
    },
    noContentText: 'No quick links configured',
    hideNoContentImage: false
  }
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var D,E,S;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    widgetData: {
      tagName: 'cmp-quick-links',
      content: {
        links: [{
          icon: 'fa-home',
          iconColor: '#007bff',
          isExternal: false,
          linkIdentifier: 'valid-link',
          subtitle: 'This is a valid link',
          title: 'Valid Link',
          url: {
            text: 'Valid Link',
            url: 'https://example.com',
            isExternal: false
          }
        }, {
          icon: 'fa-exclamation-triangle',
          iconColor: '#dc3545',
          isExternal: false,
          linkIdentifier: 'invalid-link',
          subtitle: 'This link has an invalid URL (missing protocol)',
          title: 'Invalid Link',
          url: {
            text: 'Invalid Link',
            url: 'example.com',
            isExternal: false
          }
        }]
      }
    },
    noContentText: 'No quick links available',
    hideNoContentImage: false
  }
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var Q,z,V;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    widgetData: sampleWidgetData,
    className: 'custom-styled-links',
    noContentText: 'No shortcuts configured'
  }
}`,...(V=(z=g.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var R,A,U;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    widgetData: sampleWidgetData,
    alignment: 'horizontal',
    noContentText: 'No quick links available'
  }
}`,...(U=(A=h.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var j,M,P;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    widgetData: sampleWidgetData,
    noContentText: 'No quick links available',
    hideNoContentImage: false
    // Explicitly not providing onLinkClick to allow normal navigation
  },
  parameters: {
    docs: {
      description: {
        story: \`This story demonstrates normal URL navigation behavior. Click on the links to navigate to their configured URLs.
        The \\\`onLinkClick\\\` prop is intentionally omitted to allow default browser navigation.\`
      }
    }
  }
}`,...(P=(M=f.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const se=["Default","AllLinks","NoContent","WithInvalidLinks","CustomStyling","HorizontalAlignment","NavigationDemo"];export{k as AllLinks,g as CustomStyling,d as Default,h as HorizontalAlignment,f as NavigationDemo,p as NoContent,m as WithInvalidLinks,se as __namedExportsOrder,ne as default};
