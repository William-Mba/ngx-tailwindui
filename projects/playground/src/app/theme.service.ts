import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    
  private _themeStore = localStorage;

  private _lightElementIds: string[] = [
    'logo-light-icon',
    'search-light-icon',
    'theme-toggle-light-icon',
    'footer-theme-light-logo'
  ];

  private _darkElementIds: string[] = [
    'logo-dark-icon',
    'search-dark-icon',
    'theme-toggle-dark-icon',
    'footer-theme-dark-logo'
  ]

  public toggleDarkTheme(){
    if (this.isDarken()) {
      this.hideDarkDisplayLight();
    }
    else {
      this.hideLightDisplayDark();
    }
  }
  
  public initializeSettings(){    
    const previousSetting = this._themeStore.getItem(Theme.preference);

    switch (previousSetting) {
      case Theme.light:
        this.hideDarkDisplayLight();
        break;
      case Theme.dark:
        this.hideLightDisplayDark();
        break;
    }
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if(darkTheme.matches) {
      this.hideLightDisplayDark()
    }
    else {
      this.hideDarkDisplayLight();
    }
  }

  private isDarken(): boolean {
    return document.documentElement.classList.contains(Theme.dark);
  }

  private hideDarkDisplayLight(){
    this.hideElementsById(this._darkElementIds);
    this.displayElementsById(this._lightElementIds);
    document.documentElement.classList.remove(Theme.dark);
    this._themeStore.setItem(Theme.preference, Theme.light);
  }

  private hideLightDisplayDark(){
    this.hideElementsById(this._lightElementIds);
    this.displayElementsById(this._darkElementIds);
    document.documentElement.classList.add(Theme.dark);
    this._themeStore.setItem(Theme.preference, Theme.dark);
  }

  private display(elements: HTMLElement[]){
    elements.forEach(e => {
      if (e?.classList.contains('hidden')) {
        e?.classList.remove('hidden');
      }      
    })
  }

  private hide(elements: HTMLElement[]){
    elements.forEach(e => {
      if (!e?.classList.contains('hidden')) {
        e?.classList.add('hidden');
      }      
    })
  }

  private toggleClass(token: string, elements: HTMLElement[], force?: boolean){
    if (force != undefined) {
      elements.forEach(e => {
        e?.classList.toggle(token, force);
      })      
      return
    }
    elements.forEach(e => {
      e?.classList.toggle(token);
    })
  }

  private hideElementsById(ids: string[]){
    let elements: HTMLElement[] = [];

    ids.forEach(id => {
      const e = document.getElementById(id);
      if (e != null) {
        elements.push(e)
      }
    })
    
    this.hide(elements)
  }

  private displayElementsById(ids: string[]){
    let elements: HTMLElement[] = [];

    ids.forEach(id => {
      const e = document.getElementById(id);
      if (e != null) {
        elements.push(e)
      }
    })

    this.display(elements)
  }

  private getElementsById(ids: string[]): HTMLElement[] {
    let elements: HTMLElement[] = [];

    ids.forEach(id => {
      const e = document.getElementById(id);
      if (e != null) {
        elements.push(e)
      }
    })

    return elements;
  }
}

enum Theme {
  preference = "prefered-theme-color",
  dark = "dark",
  light = "light"
}
