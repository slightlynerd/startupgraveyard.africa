export const SANITIZE_HTML_OPTIONS = {
  allowedTags: ['p', 'a', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'ul', 'ol', 'li', 'strong', 'em', 'strike', 'code', 'pre', 'span', 'br', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src', 'alt', 'class'],
    span: ['style'],
    div: ['style'],
    table: ['style'],
    thead: ['style'],
    tbody: ['style'],
    tr: ['style'],
    th: ['style'],
    td: ['style']
  },
  allowedSchemes: ['http', 'https', 'mailto']
};
