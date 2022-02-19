import { FunctionComponent } from 'react';

declare global {
   interface VTEXCustomComponent<Props = {}> extends FunctionComponent<Props> {
      defaultProps?: Props;
      schema?: Schema;
   }
   
   interface Schema {
      title: string;
      type: Extract<SchemaType, 'object'>;
      default?: any;
      properties: SchemaProperties;
   }
}

export type SchemaType = 'array' | 'object' | 'string' | 'boolean' | 'number';

export interface SchemaProperties {
  __editorItemTitle?: {
    default: string
    title: string
    type: Extract<SchemaType, 'string'>
  },
   [key: string]: {
      type: SchemaType;
      enumNames?: string[]; //esse funciona junto com o enum
      enum?: string[];
      default?: any;
      title?: string;
      description?: string;
      properties?: SchemaProperties;
      format?: 'date-time',
      widget?: {
         "ui:widget"?: "image-uploader" | "datetime"
      },
      items?: {
         type: SchemaType;
         title?: string;
         properties?: SchemaProperties;
         default?: any;
      }
   }
}