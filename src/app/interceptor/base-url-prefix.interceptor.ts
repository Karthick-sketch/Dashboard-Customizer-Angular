import { HttpInterceptorFn } from '@angular/common/http';

export const BaseUrlPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'http://localhost:8080';

  if (!req.url.startsWith('http')) {
    const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
    return next(apiReq);
  }
  return next(req);
};
