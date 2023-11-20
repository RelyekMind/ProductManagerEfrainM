class ProductManager {
  constructor() {
    this.products = [];
  }

  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.some((product) => product.code === code)) {
      throw new Error("El código del producto ya está en uso.");
    }

    const id = this.generateId();
    const product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
    return product;
  }

  getProductById(productId) {
    const product = this.products.find((product) => product.id === productId);

    if (!product) {
      throw new Error("Producto no encontrado.");
    }

    return product;
  }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

const newProduct = productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log("Producto agregado:", newProduct);

console.log(productManager.getProducts());

try {
  productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );
} catch (error) {
  console.error("Error al agregar producto:", error.message);
}

try {
  const foundProduct = productManager.getProductById(newProduct.id);
  console.log("Producto encontrado por ID:", foundProduct);
} catch (error) {
  console.error("Error al obtener producto por ID:", error.message);
}
