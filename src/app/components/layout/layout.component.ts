import { Component, OnInit } from '@angular/core';
import { TypeWriterService } from '../../services/type-writer.service';
import { map } from 'rxjs';

@Component({
  selector: 'portfolio-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  text = "Hi, I'm Jesteena Jose, a Software Developer";
  typedText$ = this.typewriterService
    .getTypewriterEffect(this.text)
    .pipe(map((text) => text));

  constructor(private typewriterService: TypeWriterService) {}

  ngOnInit(): void {}
}
