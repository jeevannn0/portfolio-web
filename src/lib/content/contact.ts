import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'get in touch',
    subtitle: "what's next",
    paragraphs: [
    'Whether you have to discuss or just want to say hy Wassup!, my inbox is open for all!',
    ],
    link: `mailto:${author.email}`,
};