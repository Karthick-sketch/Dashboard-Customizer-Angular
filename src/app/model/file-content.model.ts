export class FileContent {
  id?: string;
  filename!: string;
  content!: { id: number; key: string; value: string | number | boolean }[];
}
