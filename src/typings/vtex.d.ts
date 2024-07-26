import { FunctionComponent } from 'react';

declare global {
   interface VTEXCustomComponent<Props = {}> extends FunctionComponent<Props> {
      defaultProps?: Props;
      schema?: Schema;
   }
   
   interface Schema {
      title: string;
      type: Extract<SchemaType, 'object'>;
      properties: SchemaProperties;
      dependencies?: SchemaDependencies;
   }
}

export type SchemaType = 'array' | 'object' | 'string' | 'boolean' | 'number';
export type UiWidget = 'image-uploader' | 'textarea' | 'datetime' | 'select' | 'color';

export interface SchemaDependencies {
   [key: string]: {
      oneOf: {
         properties: {
            [key: string]: Partial<SchemaItemProperty>;
         }
      }[];
   }
}

export interface SchemaProperties {
  __editorItemTitle?: {
    default: string
    title: string
    type: Extract<SchemaType, 'string'>
  },
   [key: string]: SchemaItemProperty;
}

export interface SchemaItemProperty {
   type: SchemaType;
   enumNames?: string[]; //esse funciona junto com o enum
   enum?: string[];
   default?: any;
   title?: string;
   description?: string;
   properties?: SchemaProperties;
   format?: 'date-time',
   widget?: {
      "ui:widget"?: UiWidget;
   },
   items?: {
      type: SchemaType;
      title?: string;
      properties?: SchemaProperties;
      default?: any;
   }
};