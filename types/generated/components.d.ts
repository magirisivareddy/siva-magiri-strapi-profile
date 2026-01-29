import type { Schema, Struct } from '@strapi/strapi';

export interface FocusAreasFocusAreas extends Struct.ComponentSchema {
  collectionName: 'components_focus_areas_focus_areas';
  info: {
    displayName: 'focusAreas';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface HighlightsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_highlights_highlights';
  info: {
    displayName: 'highlights';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    link: Schema.Attribute.String;
  };
}

export interface ParagraphLong extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_longs';
  info: {
    displayName: 'long';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    linkedInUrl: Schema.Attribute.Component<'link.link', true>;
    name: Schema.Attribute.String;
    profileImage: Schema.Attribute.Media<'images'>;
    resume: Schema.Attribute.Media<'files'>;
    role: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
    tagline: Schema.Attribute.String;
  };
}

export interface SectionsSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'About';
  };
  attributes: {
    description: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    focusAreas: Schema.Attribute.Component<'focus-areas.focus-areas', true>;
    highlights: Schema.Attribute.Component<'highlights.highlights', true>;
    paragraph: Schema.Attribute.Component<'paragraph.long', true>;
    resumeUrl: Schema.Attribute.Media<'files'>;
    stats: Schema.Attribute.Component<'stats.stats', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSkills extends Struct.ComponentSchema {
  collectionName: 'components_sections_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    skills: Schema.Attribute.Component<'skills.skills', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    name: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface StatsStats extends Struct.ComponentSchema {
  collectionName: 'components_stats_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'focus-areas.focus-areas': FocusAreasFocusAreas;
      'highlights.highlights': HighlightsHighlights;
      'link.link': LinkLink;
      'paragraph.long': ParagraphLong;
      'sections.hero': SectionsHero;
      'sections.sections': SectionsSections;
      'sections.skills': SectionsSkills;
      'seo.seo': SeoSeo;
      'skills.skills': SkillsSkills;
      'stats.stats': StatsStats;
    }
  }
}
