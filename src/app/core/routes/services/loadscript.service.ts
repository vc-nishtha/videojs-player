import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LoadScriptService {

  createScript(url: string, cb: Function = () => { }): void {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.addEventListener("load", () => cb());
    script.src = url;
    script.defer = true;
    body.appendChild(script);
  }
}
