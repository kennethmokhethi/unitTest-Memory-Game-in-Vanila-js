describe("memory game tests", () => {
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;

  // using jsDoms VirtualConsole method
  // and telling it to use the default nodejs console.
  const virtualConsole = new jsdom.VirtualConsole();
  virtualConsole.sendTo(console);

  // this function simulates a click on one of the game tiles.
  const clickSimulator = arg => {
    let event = new global.view.MouseEvent("click", {
      view: global.view,
      bubbles: true,
      cancelable: false
    });

    //  let element = global.window.getElementsByTagName("LI")[arg];
    //  element.dispatchEvent(event);
  };

  beforeEach(() => {
    dom = new JSDOM(
      `<!DOCTYPE html>
        <html>
          <head>
            <title>memory slot</title>
            <link rel="stylesheet" href="memoryslot.css" />
          </head>
          <body>
            <div>
              <h1>MEMORY-GAME</h1>
              <br />
            </div>
        
            <section class="memory-game">
              <div class="memory-slot" data-framework="edge">
                <img class="front" src="images/edge.jpeg" alt="edge" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="edge">
                <img class="front" src="images/edge.jpeg" alt="edge" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="humid">
                <img class="front" src="images/humid.jpg" alt="humid" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="humid">
                <img class="front" src="images/humid.jpg" alt="humid" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="mount">
                <img class="front" src="images/mount.jpg" alt="mount" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="mount">
                <img class="front" src="images/mount.jpg" alt="mount" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="sunset">
                <img class="front" src="images/sunset.jpeg" alt="sunset" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="sunset">
                <img class="front" src="images/sunset.jpeg" alt="sunset" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="accomodation">
                <img class="front" src="images/accomodation.jpg" alt="accomodation" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="accomodation">
                <img class="front" src="images/accomodation.jpg" alt="accomodation" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="ship">
                <img class="front" src="images/ship.jpg" alt="ship" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
        
              <div class="memory-slot" data-framework="ship">
                <img class="front" src="images/ship.jpg" alt="ship" />
                <img class="back" src="images/funnyface.jpeg" alt="emoji" />
              </div>
            </section>
        
            <script src="memoryslot.js"></script>
          </body>
        </html>
        `,
      {
        // enabling jsDom to run scripts and use external
        // resource via i.e <link>, <script>, <img>, etc
        runScripts: "dangerously",
        resources: "usable"
      }
    );
    global.view = dom.window;
    global.window = dom.window.document;
    game = require("../src/memoryslot");
  });

  it("should be able to add addEventListener to all game tiles and ,make them clickable", () => {
    clickSimulator(0); // specify which card index to click
    expect(global.window.getElementsByClassName("open").length).toEqual(0);
  });

  // it("should dosomething", () => {
  //   expect(typeof 1).toEqual("number");
  // });
});
