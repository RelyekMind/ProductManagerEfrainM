class ProductManager {
  constructor() {
    this.products = [];
  }

  generateUniqueId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    const id = this.generateUniqueId();
    const newProduct = { id, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  }

  updateProduct(id, updatedFields) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      const updatedProduct = { ...this.products[index], ...updatedFields, id };
      this.products[index] = updatedProduct;
      return updatedProduct;
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1)[0];
      return deletedProduct;
    } else {
      throw new Error("Producto no encontrado");
    }
  }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

const newProduct = {
  title: "Producto de prueba",
  description: "Este es un producto de prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};

const addedProduct = productManager.addProduct(newProduct);
console.log("Producto agregado:", addedProduct);

console.log(productManager.getProducts());

const productId = addedProduct.id;
console.log("Producto por ID:", productManager.getProductById(productId));

const updatedFields = { price: 250, stock: 20 };
const updatedProduct = productManager.updateProduct(productId, updatedFields);
console.log("Producto actualizado:", updatedProduct);

const deletedProduct = productManager.deleteProduct(productId);
console.log("Producto eliminado:", deletedProduct);

try {
  console.log(productManager.getProductById(productId));
} catch (error) {
  console.error(error.message);
}
