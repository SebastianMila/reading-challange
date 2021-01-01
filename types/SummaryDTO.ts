export interface SummaryDTO {
    reader: string;
    books: number;
    pages: number;
    data: { day: string, pages: number }[];
}