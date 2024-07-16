import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
})
export class AppComponent {
    wordsOfAdvice: string[] = [];
    val = '';

    getAdvice() {
        this.wordsOfAdvice.push(
            `Hi ${
                this.val ? this.val : 'unknown'
            }! This is my advice for you: ${this.oracleMessage()}`,
        );

        this.val = '';
    }

    oracleMessage(): string {
        const index = Math.floor(Math.random() * 3);

        return [
            'Your commit messages will be full of joy today!',
            'Beware of black cats!',
            '42 represents all meaning of life',
        ][index];
    }
}
