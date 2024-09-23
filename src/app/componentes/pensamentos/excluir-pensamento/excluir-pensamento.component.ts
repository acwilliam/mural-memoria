import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento ={
    id:'',
    conteudo: '',
    autoria: '',
    modelo: '',
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.service.buscarPorId(id).subscribe((pensamento) =>{
          this.pensamento = pensamento
        })
      }
    }

    excluirPensamento() {
      if( this.pensamento.id) {
        this.service.excluir(this.pensamento.id).subscribe(() =>{
          this.router.navigate(['/listarPensamentos'])
        })
      }
    }

    cancelar() {
      this.router.navigate(['/listarPensamentos'])
    }
}
