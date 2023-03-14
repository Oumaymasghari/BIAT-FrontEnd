import { Component } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent {
  reactions = ['😍', '😂', '😢', '😡'];
  currentReaction: string;
  showReactions = false;

  onReactionClick(reaction: string) {
    this.currentReaction = reaction;
    this.showReactions = false;
  }

  toggleReactions() {
    this.showReactions = !this.showReactions;
  }
}
