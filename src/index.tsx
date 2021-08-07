import JSX from "./core/factory/R1IO";

function Hello(name: string) {
  return (
    <div className="asd">
      Hello {name}
      <div> Hello Nested </div>
      <div> Hello Nested 2</div>
    </div>
  );
}

function log(html: string) {
  console.log(html);
}

log(Hello("World"));
