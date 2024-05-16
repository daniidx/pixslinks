window.pf.ui.hi = () => {
  console.log("UI 1NJ3K7ED");
}

window.toggleForgeUI = () => {
  let uiDiv = document.getElementById('forgeConfig')
  uiDiv.style.display = uiDiv.style.display === 'none' ? 'block' : 'none';
}

const init = async () => {
  const _uidiv = await ShowUI();
  document.body.appendChild(_uidiv);

  let uiDiv = document.getElementById('forgeConfig')
  console.log("ovovoov", uiDiv)
  uiDiv.style.position = 'fixed';
  uiDiv.style.top = 20;
  uiDiv.style.left = 20;
  uiDiv.style.zIndex = 1000; 
  document.body.appendChild(uiDiv);

  var longRangeCheckbox = document.getElementById('longRange');
  var easyTeleportCheckbox = document.getElementById('easyTeleport');
  var noCollisionCheckbox = document.getElementById('noCollision');
  var speedHackCheckbox = document.getElementById('speedHack');
  var autoChopTreesCheckbox = document.getElementById('autoChopTrees');

  window.forgeLongRange = longRangeCheckbox.checked;
  window.forgeEasyTeleport = easyTeleportCheckbox.checked;
  window.forgeNoCollision = noCollisionCheckbox.checked;
  window.forgeSpeedHack = speedHackCheckbox.checked;
  //window.forgeAutoChopTrees = autoChopTreesCheckbox.checked;

  longRangeCheckbox.onclick = function() {
    window.forgeLongRange = this.checked;
  };
  
  easyTeleportCheckbox.onclick = function() {
    window.forgeEasyTeleport = this.checked;
  };
  
  noCollisionCheckbox.onclick = function() {
    window.forgeNoCollision = this.checked;
  };
  
  speedHackCheckbox.onclick = function() {
    window.forgeSpeedHack = this.checked;
  };
  
  /*
  autoChopTreesCheckbox.onclick = function() {
    window.forgeAutoChopTrees = this.checked;
  };*/

}



const ShowUI = async () => {

  let div = document.createElement('div');

  div.innerHTML = /*html*/`
    <div id="forgeConfig" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; padding: 16px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
      <h1 style="color: #fff; font-size: 24px; margin-bottom: 16px;">Configuration</h1>

      <div style="margin-bottom: 16px;">
        <input type="checkbox" id="longRange" style="display: none;">
        <label for="longRange" style="color: #fff; font-size: 16px; cursor: pointer; user-select: none; padding: 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.2);">
          <span style="display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-radius: 2px; margin-right: 8px;"></span>Long range click
        </label><br>
        
        <input type="checkbox" id="easyTeleport" style="display: none;">
        <label for="easyTeleport" style="color: #fff; font-size: 16px; cursor: pointer; user-select: none; padding: 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.2);">
          <span style="display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-radius: 50%; margin-right: 8px;"></span>Easy teleport
        </label><br>
        
        <br>
        <p style="font-size: 14px; color: #fff; opacity: 0.8;">Enable the following options before starting the game:</p>
        <input type="checkbox" id="noCollision" style="display: none;">
        <label for="noCollision" style="color: #fff; font-size: 16px; cursor: pointer; user-select: none; padding: 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.2);">
          <span style="display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-radius: 50%; margin-right: 8px;"></span>No collisions <span style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">(game reload required)</span>
        </label><br>
        
        <input type="checkbox" id="speedHack" style="display: none;">
        <label for="speedHack" style="color: #fff; font-size: 16px; cursor: pointer; user-select: none; padding: 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.2);">
          <span style="display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-radius: 2px; margin-right: 8px;"></span>Speed Hack <span style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">(game reload required)</span>
        </label><br>

        <div>
          <input type="checkbox" id="autoChopTrees" disabled style="display: none;">
          <label for="autoChopTrees" style="color: rgba(255, 255, 255, 0.6); font-size: 16px; cursor: pointer; user-select: none; padding: 8px; border-radius: 4px; background: rgba(255, 255, 255, 0.2);">
            <span style="display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-radius: 2px; margin-right: 8px;"></span>Auto chop trees <span style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">(coming soon)</span>
          </label><br>
        </div>
        
      </div>
        
    </div>
        
    `
    return div;

}


init()
