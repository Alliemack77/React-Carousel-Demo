import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";

function App() {
  return (
    <Carousel>
      <CarouselItem>
        <div>This is an image</div>
      </CarouselItem>
      <CarouselItem>
        <div>This is an image</div>
      </CarouselItem>
      <CarouselItem>
        <div>This is an image</div>
      </CarouselItem>
      <CarouselItem>
        <div>This is an image</div>
      </CarouselItem>
    </Carousel>
  );
}

export default App;
