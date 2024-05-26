import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  constructor() { }

  async extractDataFromPdf(pdfUrl: string): Promise<any> {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;
    let text = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const pageText = await page.getTextContent();
      pageText.items.forEach((item:any) => {
        text += item.str + ' ';
      });
    }

    return text;
  }
}
