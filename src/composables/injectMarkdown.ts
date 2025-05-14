import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";
import markdownItAttrs from 'markdown-it-attrs'

const injectMarkdown = (rawMd: string, sectionName?: string) => {
    const md = new MarkdownIt().use(markdownItAttrs);
    let markdownToRender = rawMd;
    if (sectionName) {
        const pattern = new RegExp(`## \\[${sectionName}\\]([\\s\\S]*?)(?=## \\[|$)`);
        const match = rawMd.match(pattern);
        markdownToRender = match ? match[1].trim() : '';
    }

    const htmlContent = md.render(markdownToRender);
    const sanitizedHtml = DOMPurify.sanitize(htmlContent);
    return sanitizedHtml;
};

export default injectMarkdown;