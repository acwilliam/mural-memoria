import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo:''
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(id).subscribe((pensamento) =>{
        this.pensamento = pensamento;
      })
    }
  }
  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos']);
    })

  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamentos']);
  }
}
