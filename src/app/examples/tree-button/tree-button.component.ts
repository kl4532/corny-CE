import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-button',
  templateUrl: './tree-button.component.html',
  styleUrls: ['./tree-button.component.scss']
})
export class TreeButtonExComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = [
    {
      "id" : 1,
      "name" : "cat1-start",
      "subcategory" : [ {
        "id" : 1.1,
        "name" : "sub1",
        "subcategory" : [ {
          "id" : 1.11,
          "name" : "sub1.1",
          "subcategory" : [ {
            "id" : 1.111,
            "name" : "sub1.1.1-last-child"
          } ]
        } ]
      } ]
    }, 
    {
      "id" : 2,
      "name" : "cat2",
      "subcategory" : [ {
        "id" : 2.1,
        "name" : "sub1"
      }, {
        "id" : 2.2,
        "name" : "sub2"
      }, {
        "id" : 2.3,
        "name" : "sub3"
      } ]
    }, {
      "id" : 3,
      "name" : "cat3"
    }, {
      "id" : 4,
      "name" : "cat4"
    }, {
      "id" : 5,
      "name" : "cat5"
    }, {
      "id" : 6,
      "name" : "cat6"
    } 
]

products = [
  {
      "category" : "cat1",
      "id" : "1",
      "name" : "prod1",
      "price" : 199
    }, {
      "category" : "cat2",
      "id" : "2",
      "name" : "prod2",
      "price" : 29,
      "subcat" : "sub3"
    }, {
      "category" : "cat2",
      "id" : "2",
      "name" : "prod2",
      "price" : 29,
      "subcat" : "sub2"
    }, {
      "category" : "cat2",
      "id" : "2",
      "name" : "prod2",
      "price" : 29,
      "subcat" : "sub2"
    }, {
      "category" : "cat3",
      "id" : "2",
      "name" : "prod3",
      "price" : 399
    }, {
      "category" : "cat1",
      "id" : "2",
      "name" : "lnkasdv",
      "price" : 399
    }, {
      "category" : "cat1",
      "id" : "2",
      "name" : "lnkasdv",
      "price" : 399,
      "subcat" : "sub1"
    }, {
      "category" : "cat1",
      "id" : "2",
      "name" : "lnkasdv",
      "price" : 399
    }, {
      "category" : "cat1",
      "id" : "2",
      "name" : "test",
      "price" : 399
    }
]

}
