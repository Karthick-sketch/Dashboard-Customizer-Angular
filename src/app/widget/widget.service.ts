import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WidgetModel } from '../model/widget.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  constructor(private http: HttpClient) {}

  getWidgets() {
    return this.http.get<WidgetModel[]>('/widget/all');
  }

  createWidget(widget: WidgetModel) {
    return this.http.post<WidgetModel>('/widget', widget);
  }
}
