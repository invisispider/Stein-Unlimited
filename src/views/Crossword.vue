<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import useCrossword from "@/composables/Crosswords/integralcrossword";
import { useStore } from "@/stores";
document.title = "Integral Crossword ~ Stein unLimited";
const across = ref(useCrossword.across)
const down = ref(useCrossword.down)
const store = useStore()
const collapseAcross = ref(true);
const collapseDown = ref(true);
const rowNum = 11;
const colNum = 11;
const cheating = ref(false);
const userMessage = ref('Welcome! Enjoy a nice game.');
const toggle = (direc: string) => {
  if (direc == "across") {
    collapseAcross.value = !collapseAcross.value;
  } else {
    collapseDown.value = !collapseDown.value;
  }
};
type pRef = [number, number]
const enumerateCells = (pRef: pRef) => 11 * (pRef[0] - 1) + pRef[1];
const getElement = (pRef: pRef) => {
  var refCell = document.querySelector(
    `tr[row='${pRef[0]}']>td[col='${pRef[1]}']`
  ) as HTMLElement | null;

  return refCell;
};
const drawWord = ([row, col]: pRef, chars: string, direc: string) => {
  for (let i = 0; i < chars.length; i++) { 
    const p: pRef = direc==="across" 
      ? [row, col+i] 
      : [row + i, col];
    const input = getElement(p)?.querySelector('input') as HTMLInputElement;
    if (input) input.value = chars[i];
  }
};
const renderChars = () => {
  across.value.forEach((datum) => drawWord(datum.pos as pRef, datum.answer, "across"));
  down.value.forEach((datum) => drawWord(datum.pos as pRef, datum.answer, "down"));
};
// const answerCode = ref('');


const buildMatrix = (): string[][] => {
  const m = Array.from({ length: rowNum }, () => Array(colNum).fill(""));

  // [...across.value, ...down.value].forEach(({ pos: [r, c], answer }, idx, arr) => {
  [...across.value, ...down.value].forEach(({ pos: [r, c], answer }, idx) => {
    for (let i = 0; i < answer.length; i++) {
      if (idx < across.value.length) m[r - 1][c - 1 + i] = answer[i];
      else m[r - 1 + i][c - 1] = answer[i];
    }
  });

  return m;
};
// const renderMatrix = () => {
// 	const m: [string[]] = [['','']];
// 	for (let i = 0; i < 11; i++) {
// 		m[i] = [];
// 		for (let j = 0; j < 11; j++) {
// 			m[i][j] = '';
// 		}
// 	}
// 	return m;
// };
// const assignMatrix = (mat: [string[]]) => {
// 	across.value.forEach((acr) => {
// 		let ans = acr.answer;
// 		let pos = acr.pos as pRef;
// 		for (let k = 0; k < ans.length; k++) {
// 			mat[pos[0] - 1][pos[1] + k - 1] = ans[k];
// 		}
// 	});
// 	down.value.forEach((dow) => {
// 		let ans = dow.answer;
// 		let pos = dow.pos;
// 		for (let k = 0; k < ans.length; k++) {
// 			mat[pos[0] - 1 + k][pos[1] - 1] = ans[k];
// 		}
// 	});
// 	return mat;
// };


const setupMatrix = () => {
  const matrix = buildMatrix();
  const startMap = new Set([...across.value, ...down.value].map(d => `${d.pos[0]}x${d.pos[1]}`));

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      const pair: pRef = [i + 1, j + 1];
      const el = getElement(pair);
      if (!cell && el) el.innerHTML = "";
      else if (startMap.has(`${pair[0]}x${pair[1]}`) && el) {
        const label = document.createElement("div");
        label.className = "head-label";
        label.innerText = enumerateCells(pair).toString();
        el.prepend(label);
      }
    });
  });

    // prepare for answer check
  // across.value.forEach((ans)=> {
  // 	answerCode.value += ans.answer;
  // })
  // down.value.forEach((ans)=> {
  // 	answerCode.value += ans.answer;
  // })

  // let matrix = renderMatrix();
  // matrix = assignMatrix(matrix);
  // // console.log(matrix)
  // let startMap = across.value
  //   .map((index) => index.pos)
  //   .concat(down.value.map((index) => index.pos));
  // matrix.forEach((row, i) => {
  //   row.forEach((cell, j) => {
  //     let pair: pRef = [i + 1, j + 1];
  //     if (!cell) {
  //       let el = getElement(pair);
  //       if (el) {
  //         while (el.lastChild) {
  //           el.removeChild(el.lastChild);
  //         }
  //       }
  //     } else {
  //       startMap.forEach((val) => {
  //         if (val[0] == i + 1 && val[1] == j + 1) {
  //           let el = getElement(pair);
  //           let newDiv = document.createElement("div");
  //           newDiv.className = "head-label";
  //           newDiv.innerHTML = enumerateCells(pair).toString();
  //           el?.prepend(newDiv);
  //         }
  //       });
  //     }
    // });
  // });
}
onMounted(() => {
  setupMatrix()
  setTimeout(() => {
    userMessage.value = " "
  }, 8000)
});

const selectMe = async (pRef: pRef) => {
  if (typeof pRef==='object') {
    let el = getElement(pRef) as Element;
    let child = el?.lastChild as HTMLInputElement;
    await nextTick(() => child?.focus());
  }
};
const resetInputs = (warn: boolean) => {
  if (warn) {
    if (confirm("Really want to CLEAR all your progresst?")) {
      let inputs = document.getElementsByClassName("clearme") as HTMLCollectionOf<HTMLInputElement>;
      Array.from(inputs).forEach((input) => (input.value = ""))
    }
  } else {
    let inputs = document.getElementsByClassName("clearme") as HTMLCollectionOf<HTMLInputElement>;
    Array.from(inputs).forEach((input) => (input.value = ""))
  }
};
const clueMe = () => {
  if (
    confirm(
      "This will erase your porgoresst! Are you REALLY sure? If you are, you can keep mashing it btw."
    )
  ) {
  cheating.value=true
    setTimeout(() => {
      resetInputs(false);
    cheating.value=false
    }, 3000);
    renderChars();
  }
};
const infoMe = () => {
  var instructions = "";
  instructions +=
    "How to play:\n";
  instructions +=
    "- Couch Icons jump to squares.\n- Click or use arrow keys to move.\n";
  instructions +=
    "- Clue Button flashes solution then resets the board.\n- Reset Button clears the board.\n";
  instructions +=
  "- Solve Button checks your answers.\n";
  instructions +=
  "- New games may become available as you progrest."
  setTimeout(() => {
    userMessage.value = " ";
  }, 20000)
  userMessage.value = instructions
  // alert(instructions);
};
// function isFocusable(element: HTMLElement): element is HTMLInputElement {
//     return element instanceof HTMLInputElement && typeof (element as HTMLInputElement).focus === 'function';
// }
const moveMe = (keyPress: string, row: number, col: number) => {
  let el = getElement([row, col]) as Element;
  let child = el?.lastChild as HTMLInputElement;
  if (child instanceof HTMLInputElement && typeof (child as HTMLInputElement).focus === 'function') {
    child.focus();
  } else if (keyPress === "left") {
    if (col>1) moveMe('left', row, col-1);
  } else if (keyPress === "right") {
    if (col<11) moveMe('right', row, col+1);
  } else if (keyPress === "down") {
    if (row<11) moveMe('down', row+1, col);
  } else if (keyPress === "up") {
    if (row>1) moveMe('up', row-1, col);	
  }
};

// @new
const validateEntry = (entry: any, dir: "across" | "down") => {
  const [row, col] = entry.pos;
  return [...entry.answer].every((ch, i) => {
    const r = dir === "across" ? row : row + i;
    const c = dir === "across" ? col + i : col;
    const input = document.querySelector(`#puzzle input[name='${r}x${c}']`) as HTMLInputElement;
    return input?.value.toUpperCase() === ch;
  });
};

const checkAnswer = () => {
  if (cheating.value) return false;
  const allCorrect = [
    ...across.value.map(a => validateEntry(a, "across")),
    ...down.value.map(b => validateEntry(b, "down")),
  ].every(Boolean);

  userMessage.value = allCorrect
    ? "My goodness, you completed all porgrus! One point."
    : "Hmm. Not quite.";
  if (allCorrect) store.points++;
};

</script>
<template>
    <div id="puzzle-body">
    <div>
      <h1 class="main-title">Integral Crossword</h1>
      <p>Points: <b>{{ store.points }}</b></p>
      <p class="user-message">{{ userMessage }}</p>
      <div class="buttons">
        <span id="solve" @click="infoMe">
          <i class="material-icons">quiz</i>
          info
        </span>
        <span id="other" @click="clueMe"> 
          <i class="material-icons">visibility</i>
          clue
        </span>
        <span id="check" @click="checkAnswer">
          <i class="material-icons">mood</i>
          solve
        </span>
        <span id="clear" @click="resetInputs(true)">
          <i
          class="material-icons"
          >delete_outline</i
          >
          reset
        </span>
      </div>
    </div>
    <div class="crossword-body">
      <div id="puzzle-container">
        <table id="puzzle">
        <!-- <tbody :ref="(el) => (tbodyRows = el)"> -->
        <tbody>
          <tr v-for="(row, row_ind) in rowNum" :key="row_ind" :row="row">
            <td v-for="(col, col_ind) in colNum" :key="col_ind" :col="col">
              <input
                class="clearme"
                maxlength="1"
                type="text"
                tabindex="-1"
                :name="`${row}x${col}`"
                @keyup.left="moveMe('left', row, col - 1)"
                @keyup.right="moveMe('right', row, col + 1)"
                @keyup.down="moveMe('down', row + 1, col)"
                @keyup.up="moveMe('up', row - 1, col)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="puzzle-clues">
      <div id="acrossDiv">
        <div @click="toggle('across')" class="clue-button">Across</div>
        <transition-group id="across" name="grow" tag="div" appear mode="out-in">
          <div v-for="ac in across"
            v-show="!collapseAcross"
            :key="ac.answer"
            class="couch li-div"
            tabindex="1"
          >
<!-- in template, name=... :data-row="row" , <details> / <summary> if you want semantic toggling and less JavaScript logic., PuzzleGrid.vue for the grid

ClueList.vue for across/down

GameHeader.vue for the title, score, and buttons

-->
            <span class="material-icons" @click="selectMe(ac.pos as pRef)">chair</span>
            {{ enumerateCells(ac.pos as pRef) }}. {{ ac.question }}
        </div>
        </transition-group>
      </div>
      <div id="downDiv">
        <div @click="toggle('down')" class="clue-button">Down</div>
        <transition-group id="down" name="grow" tag="div" appear mode="out-in">
          <div v-for="dow in down"
            v-show="!collapseDown"
            :key="dow.answer"
            class="couch li-div"
            tabindex="1"
          >
            <span class="material-icons" @click="selectMe(dow.pos as pRef)">chair</span>
            {{ enumerateCells(dow.pos as pRef) }}: {{ dow.question }}
          </div>
        </transition-group>
      </div>
    </div>
  </div>
  </div>
</template>
<style lang="sass">
@use "@/assets/css/utility"
@use "@/assets/css/vars" as *
.user-message
  white-space: pre-wrap
  text-align: left
  justify-content: center
  max-width: 40ch
  margin: auto
#puzzle-body
  margin-block: 2em
  margin-top: 6rem
  .buttons
    margin-block: 0.6em
    padding: 1rem
    bottom: 0
    min-width: 300px
    max-width: 100vw
    display: flex
    flex-direction: row
    justify-content: flex-end
    flex-wrap: wrap
    span
      cursor: pointer
      display: flex
      justify-content: space-evenly
      align-items: center
      padding: 0.2em 0.8em
      margin: 0.2rem
      border-radius: $radius-button
      height: min-content
      align-self: center
      i
        margin-right: 3px	
  .main-title
    text-align: center
    margin-block: 0.2em
    @include utility.breakpoint(m)
      display: block
      width: 100vw
  #puzzle-clues
    // max-width: max-content
    // margin: auto
    display: flex
    flex-wrap: wrap
    // justify-items: flex-start
    #acrossDiv, #downDiv
      margin: 5px
    .clue-button
      padding: 0.3em 1em
      border-radius: 5px	
      margin: auto
      // align-self: center
      // text-align: center
      max-width: max-content
      font-size: 1.5rem
      cursor: pointer
    #across, #down
      height: max-content
      padding: 4px
      display: flex
      flex-direction: column
    .li-div
      border-radius: 4px
      justify-content: start
      align-items: center
      list-style-type: none
      text-align: left
    span
      cursor: pointer
      margin-right: 0.2em
  #puzzle-container
    margin: 1rem
    flex-shrink: 1
    margin-inline: auto
    justify-content: flex-start
  #puzzle
    table-layout: fixed
    aspect-ratio: 1 / 1
    width: clamp(300px, 35rem, 100%)
    // justify-self: flex-start
    @include utility.breakpoint(l)
      margin: 2rem
    // tr
    //   height: auto
    td
      aspect-ratio: 1 / 1
      // width: 100%
      // height: auto
      vertical-align: middle
      position: relative
      padding: 0
      margin: 0
      // vertical-align: middle
    input
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      padding: 0
      margin: 0
      border: none
      font-size: clamp(1rem, 4vmin, 2rem)
      text-align: center
      text-transform: uppercase
      appearance: textfield
      background: none

  
  .couch
    display: flex
    justify-content: center
  
  .head-label
    z-index: 1
    font-size: 0.45rem
    position: absolute
    top: 0
    @include utility.breakpoint(s)
      font-size: 0.6rem

.crossword-body
  display: grid
  @include utility.breakpoint(l)
      grid-template-columns: auto auto
      #puzzle-clues, #puzzle-container
        justify-self: center


</style>
