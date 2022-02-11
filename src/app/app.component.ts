import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  submitForm(ngForm: HTMLFormElement) {
    console.log(ngForm);
    console.log(ngForm.form.controls);
    console.log(ngForm.form.controls.id);
  }

  onChange(input: HTMLInputElement) {
    if (input.value.length <= 2) {
      console.log("istifadeci adi bosh buraxilmaz");
    }
  }

  onFocusout(input: HTMLInputElement) {
    if (input.value.length === 0) {
      console.log("istifadeci adi bosh buraxilmaz");
    }
  }

  onBlur(input: HTMLInputElement) {
    if (input.value.length === 0) {
      console.log("istifadeci adi bosh buraxilmaz");
    }
  }
}
