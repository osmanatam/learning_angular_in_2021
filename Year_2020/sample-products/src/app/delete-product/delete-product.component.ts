import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ProductDto } from '../interfaces/ProductDto';
import { ProductsService } from '../services/products.service';

@Component({
    selector: 'app-delete-product',
    templateUrl: './delete-product.component.html',
    styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

    product: ProductDto;
    productForm: FormGroup;

    constructor(private route: ActivatedRoute, private productsService: ProductsService,
        private ngZone: NgZone, private router: Router, private formBuilder: FormBuilder) {
        this.productForm = this.formBuilder.group({
            id: '',
            name: '',
            price: '',
            description: ''
        });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.productsService.GetProductById(parseInt(params.get('productId')))
                .subscribe((data: ProductDto) => {
                    this.product = data;
                    console.log(`${this.product.name}`);
                });
        });
    }

    onDelete(id: number): void {
        console.warn(`Product Delete Request for Id: ${id}`);

        this.productsService.DeleteProductById(id).subscribe(res => {
            console.log('Product Deleted!')
            this.ngZone.run(() => this.router.navigateByUrl('/products'))
        });
    }

}
