import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html', //template(html) externo
    //template: '<p>Testando meu primeiro componente</p>' - template(html) inline
    //styles: ['.exemplo { color: blue }'] - style(css) inline
    styleUrls: ['./topo.component.css'] //style(css) externo
})
export class TopoComponent {
    public titulo: string = "Aprendendo Inglês"
}