export const SANITIZE_HTML_OPTIONS = {
  allowedTags: ['p', 'a', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'ul', 'ol', 'li', 'strong', 'em', 'strike', 'code', 'pre', 'span', 'br', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'colgroup', 'col'],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src', 'alt', 'class'],
    span: ['style'],
    div: ['style', 'class', 'dir', 'align'],
    table: ['style', 'class'],
    thead: ['style'],
    tbody: ['style'],
    tr: ['style'],
    th: ['style'],
    td: ['style'],
    col: ['width']
  },
  allowedSchemes: ['http', 'https', 'mailto']
};
