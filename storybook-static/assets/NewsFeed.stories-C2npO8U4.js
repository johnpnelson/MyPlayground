import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-D2KL6ZxC.js";import{N as y}from"./NoContent-2ZeuBHbV.js";import{d as x}from"./logger-B8LV6ilf.js";import"./preload-helper-Dp1pzeXC.js";const ee="NewsFeed-module__navigation__FvIPs",ne="NewsFeed-module__right__I29L3",te="NewsFeed-module__left__S3jm7",t={"cmp-news-feed":"NewsFeed-module__cmp-news-feed__-z4r3","widget-title":"NewsFeed-module__widget-title__7bCc3","widget-subtitle":"NewsFeed-module__widget-subtitle__uBvxZ","news-body":"NewsFeed-module__news-body__2dFsd",navigation:ee,"nav-title":"NewsFeed-module__nav-title__or-tG","nav-button":"NewsFeed-module__nav-button__8i7hJ",right:ne,left:te,"info-link":"NewsFeed-module__info-link__NJS9J","link-button":"NewsFeed-module__link-button__NK3ei"},c={shouldShowNoContentMessage:n=>!n||!n.content.announcements||n.content.announcements.length===0?(x.warn("cmp-news-feed: content data is missing"),!0):!1,validateLinks:n=>{let i=!0;return n.content.announcements.forEach(o=>{o.link&&!o.link.url.startsWith("http://")&&!o.link.url.startsWith("https://")&&(x.warn(`cmp-news-feed: link requires that the url string include http:// or https://. ${o.link.url} is invalid`),i=!1)}),i},formatNavTitle:n=>{try{const i=new Date(n.nav);return isNaN(i.getTime())?n.nav:i.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch{return n.nav}},hasLink:n=>!!(n.link&&n.link.url&&n.link.url.trim()!=="")},q=({widgetData:n,noContentText:i="No news feed content available",className:o="cmp-news-feed",title:Y})=>{const[w,f]=l.useState(0),[r,G]=l.useState([]),[J,Z]=l.useState(!1),b=l.useCallback(s=>{s!=null&&s.announcements&&(G(s.announcements),f(0),c.validateLinks({content:s,tagName:""}))},[]);l.useEffect(()=>{n&&b(n.content),Z(c.shouldShowNoContentMessage(n))},[n,b]);const K=l.useCallback(()=>{f(s=>s===r.length-1?0:s+1)},[r.length]),Q=l.useCallback(()=>{f(s=>s===0?r.length-1:s-1)},[r.length]),X=l.useCallback(s=>{c.hasLink(s)&&s.link&&window.open(s.link.url,s.link.isExternal?"_blank":"_self")},[]);if(J)return a.jsx("div",{className:`${t["cmp-news-feed"]} ${o}`.trim(),children:a.jsx(y,{noContentText:i})});if(r.length===0)return a.jsx("div",{className:`${t["cmp-news-feed"]} ${o}`.trim(),children:a.jsx(y,{noContentText:i})});const d=r[w];return a.jsxs("div",{className:`${t["cmp-news-feed"]} ${o}`.trim(),children:[a.jsx("div",{className:`${t["widget-header"]} ${t["d-flex"]} ${t["justify-content-between"]} ${t["align-items-center"]} ${t["mb-3"]}`,children:a.jsxs("div",{children:[a.jsx("h3",{className:t["widget-title"],children:Y}),(n==null?void 0:n.subtitle)&&a.jsx("p",{className:`${t["widget-subtitle"]} ${t["text-muted"]}`,children:n==null?void 0:n.subtitle})]})}),a.jsxs("div",{className:t.navigation,children:[r.length>1&&a.jsx("button",{type:"button",className:`${t["nav-button"]} ${t.left}`,onClick:Q,"aria-label":"Previous announcement","data-testid":"news-feed-prev-button",children:a.jsx("span",{className:"fa fa-angle-left","aria-hidden":"true"})}),a.jsx("span",{className:t["nav-title"],"data-testid":"news-feed-nav-title",children:c.formatNavTitle(d)}),r.length>1&&a.jsx("button",{type:"button",className:`${t["nav-button"]} ${t.right}`,onClick:K,"aria-label":"Next announcement","data-testid":"news-feed-next-button",children:a.jsx("span",{className:"fa fa-angle-right","aria-hidden":"true"})})]}),a.jsx("div",{className:t["news-body"],"data-index":w,"data-testid":"news-feed-body",dangerouslySetInnerHTML:{__html:d.body}}),c.hasLink(d)&&d.link&&a.jsx("div",{className:t["info-link"],"data-testid":"news-feed-link",children:a.jsxs("button",{type:"button",onClick:()=>X(d),className:t["link-button"],title:"Learn More",children:[d.link.text,a.jsx("span",{className:"fa fa-external-link","aria-hidden":"true"})]})})]})};q.__docgenInfo={description:"",methods:[],displayName:"NewsFeed",props:{widgetData:{required:!1,tsType:{name:"INewsFeedWidgetData"},description:""},noContentText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No news feed content available'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'cmp-news-feed'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""}}};const e={overview:`
    The NewsFeed component displays a paginated list of announcements with navigation
    controls. It supports HTML content, optional links, date formatting, and accessibility
    features for displaying news, announcements, or updates.
  `,usage:{basic:`
      import { NewsFeed, INewsFeedContent } from './components/NewsFeed/NewsFeed';

      const widgetData: INewsFeedContent = {
        announcements: [
          {
            nav: '2024-03-15',
            body: 'Important system maintenance scheduled for this weekend.',
            link: {
              url: { url: 'https://example.com/maintenance', text: 'Learn More' },
              text: 'Learn More',
              isExternal: true
            }
          }
        ]
      };

      <NewsFeed widgetData={widgetData} />
    `,withCallback:`
      const handleLinkClick = (announcement: INewsFeedAnnouncement) => {
        devLogger.log('Link clicked for:', announcement.nav);
        // Custom navigation or analytics
      };

      <NewsFeed
        widgetData={widgetData}
        onLinkClick={handleLinkClick}
      />
    `,customStyling:`
      <NewsFeed
        widgetData={widgetData}
        className="custom-news-feed"
        noContentText="No announcements available"
        hideNoContentImage={true}
      />
    `},props:{widgetData:{description:"Data containing the news announcements to display",example:`{
        announcements: [
          {
            nav: '2024-03-15T10:30:00Z',
            body: '<p>Announcement content with <strong>HTML</strong></p>',
            link: {
              url: { url: 'https://example.com', text: 'Read More' },
              text: 'Read More',
              isExternal: true
            }
          }
        ]
      }`},noContentText:{description:"Text to display when no announcements are available"},className:{description:"Custom CSS class name applied to the component"}},interfaces:{INewsFeedContent:`
      interface INewsFeedContent {
        announcements: INewsFeedAnnouncement[];
      }
    `,INewsFeedAnnouncement:`
      interface INewsFeedAnnouncement {
        nav: string;                    // Date string (ISO format recommended)
        body: string;                   // HTML content of the announcement
        link?: INewsFeedLink;          // Optional link for more information
      }
    `,INewsFeedLink:`
      interface INewsFeedLink {
        url: IUrlAndText;              // URL and display text object
        text: string;                  // Link text (should match url.text)
        isExternal: boolean;           // Whether link opens in new tab
      }
    `,IUrlAndText:`
      interface IUrlAndText {
        url: string;                   // The actual URL (must include http:// or https://)
        text: string;                  // Display text for the URL
      }
    `},styling:{overview:`
      The NewsFeed component uses CSS Modules for scoped styling and provides
      customization through CSS variables and custom classes.
    `,cssVariables:{description:"Override these SCSS variables to customize the component appearance:",variables:{"$news-feed-min-height":{default:"15rem",description:"Minimum height of the news feed container"},"$news-feed-margin":{default:"1rem 0 3rem",description:"Margin around the news feed widget"},"$news-feed-nav-font-size":{default:"1.2rem",description:"Font size for navigation date text"},"$news-feed-nav-margin-bottom":{default:"0.33em",description:"Margin below navigation controls"},"$news-feed-body-line-height":{default:"2.5rem",description:"Line height for announcement body text"},"$news-feed-link-margin-top":{default:"1rem",description:"Top margin for the info link section"},"$news-feed-link-font-size":{default:"1.3rem",description:"Font size for the info link"},"$news-feed-link-color":{default:"$pepper450",description:"Color for the info link text"}}},customization:{variableOverride:`
        // Create a custom variables file
        // _my-newsfeed-theme.scss
        $news-feed-min-height: 20rem;
        $news-feed-nav-font-size: 1.4rem;
        $news-feed-body-line-height: 2rem;
        $news-feed-link-color: #007bff;

        // Import before the component
        @import 'my-newsfeed-theme';
        @import 'path/to/NewsFeed.module.scss';
      `,customClasses:`
        // Apply custom className
        <NewsFeed className="my-news-theme" widgetData={data} />

        // Style in your CSS
        .my-news-theme {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 16px;
        }

        .my-news-theme .navigation {
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 8px;
        }

        .my-news-theme .news-body {
          font-family: 'Georgia', serif;
        }

        .my-news-theme .info-link a {
          color: #28a745;
          text-decoration: underline;
        }
      `}},accessibility:{features:["Semantic HTML structure with proper headings","ARIA labels for navigation buttons","Keyboard navigation support","Screen reader friendly date formatting","Focus management for navigation controls","Proper link accessibility with external link indicators"],guidelines:`
      - Use proper date formats for the nav field (ISO 8601 recommended)
      - Provide meaningful announcement content
      - Ensure sufficient color contrast for links
      - Test keyboard navigation between announcements
      - Verify screen reader compatibility with HTML content
    `},validation:{urlValidation:`
      The component validates URLs and displays warnings for invalid ones:
      - URLs must start with 'http://' or 'https://'
      - Empty or missing URLs are handled gracefully
      - Invalid URLs trigger console warnings
    `,errorHandling:`
      - Missing or empty announcements show configurable no-content message
      - Invalid URLs display warnings in console
      - HTML content is sanitized for security
      - Graceful handling of missing or malformed dates
    `},examples:{basicUsage:{title:"Basic Usage",description:"Simple news feed with multiple announcements",code:`
        const newsData = {
          announcements: [
            {
              nav: '2024-03-15',
              body: 'System maintenance will occur this weekend from 2 AM to 6 AM EST.',
            },
            {
              nav: '2024-03-10',
              body: 'New features have been released! Check out the updated dashboard.',
              link: {
                url: { url: 'https://example.com/features', text: 'Learn More' },
                text: 'Learn More',
                isExternal: true
              }
            }
          ]
        };

        <NewsFeed widgetData={newsData} />
      `},withHtmlContent:{title:"Rich HTML Content",description:"News feed with formatted HTML content",code:`
        const richNewsData = {
          announcements: [
            {
              nav: '2024-03-20T14:30:00Z',
              body: '<h4>Important Update</h4><p>We have <strong>enhanced security measures</strong> and improved <em>performance</em>.</p><ul><li>Two-factor authentication</li><li>Faster load times</li><li>Better error handling</li></ul>',
              link: {
                url: { url: 'https://example.com/security', text: 'Security Details' },
                text: 'Security Details',
                isExternal: true
              }
            }
          ]
        };

        <NewsFeed widgetData={richNewsData} />
      `},withInteraction:{title:"Interactive Usage",description:"News feed with click handling and analytics",code:`
        const handleLinkClick = (announcement: INewsFeedAnnouncement) => {
          // Analytics tracking
          analytics.track('news_link_clicked', {
            date: announcement.nav,
            hasLink: !!announcement.link,
            isExternal: announcement.link?.isExternal
          });

          // Custom navigation
          if (announcement.link?.isExternal) {
            window.open(announcement.link.url.url, '_blank', 'noopener,noreferrer');
          } else if (announcement.link) {
            router.push(announcement.link.url.url);
          }
        };

        <NewsFeed
          widgetData={newsData}
          onLinkClick={handleLinkClick}
          className="tracked-news-feed"
        />
      `},customStyling:{title:"Custom Styling",description:"News feed with custom theme and styling",code:`
        <NewsFeed
          widgetData={newsData}
          className="corporate-news"
          noContentText="No company announcements"
          hideNoContentImage={false}
        />

        // CSS
        .corporate-news {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          padding: 24px;
        }

        .corporate-news .navigation {
          border-bottom: 2px solid rgba(255,255,255,0.2);
        }

        .corporate-news .navigation button {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
        }

        .corporate-news .info-link a {
          color: #ffd700;
          font-weight: bold;
        }
      `}},troubleshooting:{commonIssues:{"Navigation not working":{problem:"Buttons not responding to clicks or incorrect state management",solution:"Check that announcements array has multiple items and state updates correctly"},"Dates not formatting":{problem:"Date strings not in recognizable format",solution:"Use ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ) or standard date strings"},"HTML not rendering":{problem:"HTML content showing as plain text",solution:"Content should be in body field and will be rendered as HTML automatically"},"Links not working":{problem:"Links not clickable or opening incorrectly",solution:"Ensure URLs include protocol (http:// or https://) and isExternal is set correctly"},"Security warnings":{problem:"Browser blocking HTML content or showing security warnings",solution:"Ensure HTML content is trusted and consider additional sanitization if needed"}}}},de={title:"Components/NewsFeed",component:q,parameters:{layout:"padded",docs:{description:{component:`
${e.overview}

## Props

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| **title** | \`string\` | No | \`undefined\` | Widget title displayed in header |
| **widgetData** | \`INewsFeedWidgetData\` | No | \`undefined\` | ${e.props.widgetData.description} |
| **noContentText** | \`string\` | No | \`"No content available"\` | ${e.props.noContentText.description} |
| **className** | \`string\` | No | \`''\` | ${e.props.className.description} |

### Prop Examples

**widgetData:**
\`\`\`typescript
${e.props.widgetData.example}
\`\`\`

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

### INewsFeedContent
\`\`\`typescript
${e.interfaces.INewsFeedContent}
\`\`\`

### INewsFeedAnnouncement
\`\`\`typescript
${e.interfaces.INewsFeedAnnouncement}
\`\`\`

### INewsFeedLink
\`\`\`typescript
${e.interfaces.INewsFeedLink}
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
| \`$news-feed-min-height\` | \`${e.styling.cssVariables.variables["$news-feed-min-height"].default}\` | ${e.styling.cssVariables.variables["$news-feed-min-height"].description} |
| \`$news-feed-margin\` | \`${e.styling.cssVariables.variables["$news-feed-margin"].default}\` | ${e.styling.cssVariables.variables["$news-feed-margin"].description} |
| \`$news-feed-nav-font-size\` | \`${e.styling.cssVariables.variables["$news-feed-nav-font-size"].default}\` | ${e.styling.cssVariables.variables["$news-feed-nav-font-size"].description} |
| \`$news-feed-nav-margin-bottom\` | \`${e.styling.cssVariables.variables["$news-feed-nav-margin-bottom"].default}\` | ${e.styling.cssVariables.variables["$news-feed-nav-margin-bottom"].description} |
| \`$news-feed-body-line-height\` | \`${e.styling.cssVariables.variables["$news-feed-body-line-height"].default}\` | ${e.styling.cssVariables.variables["$news-feed-body-line-height"].description} |
| \`$news-feed-link-margin-top\` | \`${e.styling.cssVariables.variables["$news-feed-link-margin-top"].default}\` | ${e.styling.cssVariables.variables["$news-feed-link-margin-top"].description} |
| \`$news-feed-link-font-size\` | \`${e.styling.cssVariables.variables["$news-feed-link-font-size"].default}\` | ${e.styling.cssVariables.variables["$news-feed-link-font-size"].description} |
| \`$news-feed-link-color\` | \`${e.styling.cssVariables.variables["$news-feed-link-color"].default}\` | ${e.styling.cssVariables.variables["$news-feed-link-color"].description} |

### Variable Override Example
\`\`\`scss
${e.styling.customization.variableOverride}
\`\`\`

### Custom Classes Example
\`\`\`tsx
${e.styling.customization.customClasses}
\`\`\`

## Accessibility Features

${e.accessibility.features.map(n=>`- ${n}`).join(`
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

### ${e.examples.withHtmlContent.title}
${e.examples.withHtmlContent.description}

\`\`\`tsx
${e.examples.withHtmlContent.code}
\`\`\`

### ${e.examples.withInteraction.title}
${e.examples.withInteraction.description}

\`\`\`tsx
${e.examples.withInteraction.code}
\`\`\`

### ${e.examples.customStyling.title}
${e.examples.customStyling.description}

\`\`\`tsx
${e.examples.customStyling.code}
\`\`\`

## Troubleshooting

${Object.entries(e.troubleshooting.commonIssues).map(([n,i])=>`
### ${n}
**Problem:** ${i.problem}
**Solution:** ${i.solution}
`).join(`
`)}
        `}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Widget title displayed in header",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},widgetData:{control:{type:"object"},description:"Primary data for the component: { content: { announcements: [...] }, tagName: string, subtitle?: string }"},noContentText:{control:"text",description:"Message shown when no content is available",table:{type:{summary:"string"},defaultValue:{summary:'"No content available"'}}},className:{control:"text",description:"Additional CSS class for custom styling",table:{type:{summary:"string"},defaultValue:{summary:'""'}}}}},ae={tagName:"cmp-news-feed",content:{announcements:[{nav:"2021-02-16",body:"The Employee Data Report Export now has data customization options! You can insert static value fields, define what to do for null or empty fields, define a minimum length with pad characters, and for many you can even determine the desired data format and map different values to Central's values to transform the data into what is required by the destination system. Also, we hope you've enjoyed the new Track Forms enhancements rolled out a few days ago, with the new summary view, along with the helpful bulk actions like sending reminders and downloading form responses!",link:{url:"https://example.com",text:"Learn More",isExternal:!0}},{nav:"2021-02-02",body:"Two big enhancements to Track Forms! First, there is a new Form/Packet summary view to help you track forms at a higher level, with an option to view details for any form template or packet. You can still choose to view by Employee, which is the original view you've been used to. Second, there are now three bulk actions you can perform! You've been able to download form statuses into a CSV for a while now, but now you can also download form RESPONSES or SEND REMINDERS! That's right - use the filters to get the forms you're after, then use the new bulk actions to get an Excel file of all the form responses (i.e. form content), or send reminders to all those incomplete forms at once."},{nav:"2020-11-23",body:"We're happy to announce some new data export enhancements! The Employee Data Report Export can now include Primary Assignment fields, like Position, Job Type, Location, etc. Also, you can create more than one template, so if you have multiple destination systems you can create a custom template for each. Stay tuned for more export enhancements to be announced in the near future!"}]},subtitle:"Latest updates and announcements"},m={args:{title:"Company News",widgetData:ae,noContentText:"",className:""}},u={args:{title:"",widgetData:{tagName:"cmp-news-feed",content:{announcements:[]},subtitle:"Latest updates and announcements"},noContentText:"",className:""}},p={args:{title:"Company News",widgetData:{tagName:"cmp-news-feed",content:{announcements:[{nav:"2021-04-01",body:"<p>This announcement contains <strong>HTML formatting</strong> including:</p><ul><li>Bold text</li><li>Lists</li><li>Multiple paragraphs</li></ul><p>The content is safely rendered while preserving the HTML structure.</p>",link:{url:"https://example.com/html-guide",text:"HTML Guide",isExternal:!0}}]},subtitle:"Latest updates and announcements"},noContentText:"",className:""}},g={args:{title:"Company News",widgetData:{tagName:"cmp-news-feed",content:{announcements:[{nav:"2021-05-01",body:"External announcement with link to external resource.",link:{url:"https://external-site.com",text:"Visit External Site",isExternal:!0}},{nav:"2021-04-30",body:"Internal announcement with link to internal page.",link:{url:"/internal-page",text:"View Internal Page",isExternal:!1}},{nav:"2021-04-29",body:"Announcement without any link."}]},subtitle:"Latest updates and announcements"},noContentText:"",className:""}},h={args:{title:"Company News",widgetData:{tagName:"cmp-news-feed",content:{announcements:[{nav:"2021-06-01",body:"This is a very long announcement that contains a lot of text to test how the component handles lengthy content. ".repeat(20)+" This content should wrap properly and maintain readability within the component boundaries.",link:{url:"https://example.com/full-article",text:"Read Full Article",isExternal:!0}}]},subtitle:"Latest updates and announcements"},noContentText:"",className:""}};var v,k,N,$,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Company News',
    widgetData: sampleAnnouncements,
    noContentText: '',
    className: ''
  }
}`,...(N=(k=m.parameters)==null?void 0:k.docs)==null?void 0:N.source},description:{story:"Default story showing multiple announcements with navigation",...(C=($=m.parameters)==null?void 0:$.docs)==null?void 0:C.description}}};var T,L,S,F,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: '',
    widgetData: {
      tagName: 'cmp-news-feed',
      content: {
        announcements: []
      },
      subtitle: 'Latest updates and announcements'
    },
    noContentText: '',
    className: ''
  }
}`,...(S=(L=u.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:"No content state",...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.description}}};var I,E,M,D,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Company News',
    widgetData: {
      tagName: 'cmp-news-feed',
      content: {
        announcements: [{
          nav: '2021-04-01',
          body: '<p>This announcement contains <strong>HTML formatting</strong> including:</p><ul><li>Bold text</li><li>Lists</li><li>Multiple paragraphs</li></ul><p>The content is safely rendered while preserving the HTML structure.</p>',
          link: {
            url: 'https://example.com/html-guide',
            text: 'HTML Guide',
            isExternal: true
          }
        }]
      },
      subtitle: 'Latest updates and announcements'
    },
    noContentText: '',
    className: ''
  }
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Announcement with HTML content",...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.description}}};var A,H,j,U,R;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Company News',
    widgetData: {
      tagName: 'cmp-news-feed',
      content: {
        announcements: [{
          nav: '2021-05-01',
          body: 'External announcement with link to external resource.',
          link: {
            url: 'https://external-site.com',
            text: 'Visit External Site',
            isExternal: true
          }
        }, {
          nav: '2021-04-30',
          body: 'Internal announcement with link to internal page.',
          link: {
            url: '/internal-page',
            text: 'View Internal Page',
            isExternal: false
          }
        }, {
          nav: '2021-04-29',
          body: 'Announcement without any link.'
        }]
      },
      subtitle: 'Latest updates and announcements'
    },
    noContentText: '',
    className: ''
  }
}`,...(j=(H=g.parameters)==null?void 0:H.docs)==null?void 0:j.source},description:{story:"Multiple announcements with mixed link types",...(R=(U=g.parameters)==null?void 0:U.docs)==null?void 0:R.description}}};var z,P,O,W,B;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Company News',
    widgetData: {
      tagName: 'cmp-news-feed',
      content: {
        announcements: [{
          nav: '2021-06-01',
          body: 'This is a very long announcement that contains a lot of text to test how the component handles lengthy content. '.repeat(20) + ' This content should wrap properly and maintain readability within the component boundaries.',
          link: {
            url: 'https://example.com/full-article',
            text: 'Read Full Article',
            isExternal: true
          }
        }]
      },
      subtitle: 'Latest updates and announcements'
    },
    noContentText: '',
    className: ''
  }
}`,...(O=(P=h.parameters)==null?void 0:P.docs)==null?void 0:O.source},description:{story:"Long content that tests scrolling and layout",...(B=(W=h.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};const ce=["Default","NoContent","HtmlContent","MixedLinkTypes","LongContent"];export{m as Default,p as HtmlContent,h as LongContent,g as MixedLinkTypes,u as NoContent,ce as __namedExportsOrder,de as default};
