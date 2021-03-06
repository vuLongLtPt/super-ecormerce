import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { ResponseApi } from 'src/app/model/response';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public categoriesList: Array<Category> = [];
  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.getAllCategories().subscribe({
      next: (data: ResponseApi<Category>) => {
        this.categoriesList = data.data;
      },
    });
  }
}
