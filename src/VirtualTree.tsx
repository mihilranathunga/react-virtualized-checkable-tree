import React from "react";
import { AutoSizer, List as VirtualList } from "react-virtualized";
import IconElement from "./IconElement";

const ROW_HEIGHT = 32;
const RANDOM_WORDS = [
  "abstrusity",
  "advertisable",
  "bellwood",
  "benzole",
  "boreum",
  "brenda",
  "cassiopeian",
  "chansonnier",
  "cleric",
  "conclusional",
  "conventicle",
  "copalm",
  "cornopion",
  "crossbar",
  "disputative",
  "djilas",
  "ebracteate",
  "ephemerally",
  "epidemical",
  "evasive",
  "eyeglasses",
  "farragut",
  "fenny",
  "ferryman",
  "fluently",
  "foreigner",
  "genseng",
  "glaiket",
  "haunch",
  "histogeny",
  "illocution",
  "imprescriptible",
  "inapproachable",
  "incisory",
  "intrusiveness",
  "isoceraunic",
  "japygid",
  "juiciest",
  "jump",
  "kananga",
  "leavening",
  "legerdemain",
  "licence",
  "licia",
  "luanda",
  "malaga",
  "mathewson",
  "nonhumus",
  "nonsailor",
  "nummary",
  "nyregyhza",
  "onanist",
  "opis",
  "orphrey",
  "paganising",
  "pebbling",
  "penchi",
  "photopia",
  "pinocle",
  "principally",
  "prosector.",
  "radiosensitive",
  "redbrick",
  "reexposure",
  "revived",
  "subexternal",
  "sukarnapura",
  "supersphenoid",
  "tabularizing",
  "territorialism",
  "tester",
  "thalassography",
  "tuberculise",
  "uncranked",
  "undersawyer",
  "unimpartible",
  "unsubdivided",
  "untwining",
  "unwaived",
  "webfoot",
  "wedeling",
  "wellingborough",
  "whiffet",
  "whipstall",
  "wot",
  "yonkersite",
  "zonary"
];
const data = createRandomizedData();

export function createRandomizedData() {
  var data = [];

  for (var i = 0; i < 10000; i++) {
    data.push(createRandomizedItem(0));
  }

  return data;
}

export function createRandomizedItem(depth: number) {
  const item: any = {};
  item.children = [];
  item.name = RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];

  var numChildren = depth < 3 ? Math.floor(Math.random() * 5) : 0;
  for (var i = 0; i < numChildren; i++) {
    item.children.push(createRandomizedItem(depth + 1));
  }

  item.expanded = numChildren > 0 && Math.random() < 0.25;

  return item;
}

export default function VirtualTree() {
  let List: any;
  function setRef(ref: any) {
    List = ref;
  }

  const renderItem = function (item: any, keyPrefix: string) {
    const onClick = function (event: any) {
      event.stopPropagation();
      item.expanded = !item.expanded;
      List.recomputeRowHeights();
      List.forceUpdate();
    };

    const props: any = { key: keyPrefix };
    let children = [];
    let itemText: any;

    if (item.children.length) {
      if (item.expanded) {
        //   props.onClick = onClick;
        itemText = "[-] " + item.name;
        children = item.children.map(function (child: any, index: number) {
          return renderItem(child, keyPrefix + "-" + index);
        });
      } else {
        itemText = "[+] " + item.name;
      }
    } else {
      itemText = "    " + item.name;
    }

    children.unshift(
      <div
        className="item"
        key="label"
        style={{ cursor: item.children.length ? "pointer" : "auto" }}
      >
        <IconElement onClick={onClick} />
        <input
          type="checkbox"
          id={keyPrefix}
          name={keyPrefix}
          value="false"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <label htmlFor={keyPrefix}>{itemText}</label>
      </div>
    );
    return (
      <ul>
        <li {...props} children={children}></li>
      </ul>
    );
  };

  const getExpandedItemCount = function (item: any) {
    var count = 1;

    if (item.expanded) {
      count += item.children
        .map(getExpandedItemCount)
        .reduce(function (total: number, count: number) {
          return total + count;
        }, 0);
    }

    return count;
  };

  const cellRenderer = function cellRenderer(params: any) {
    const renderedCell = renderItem(data[params.index], params.index);

    return (
      <ul key={params.key} style={params.style}>
        {renderedCell}
      </ul>
    );
  };

  const rowHeight = function rowHeight(params: any) {
    return getExpandedItemCount(data[params.index]) * ROW_HEIGHT;
  };

  return (
    <AutoSizer
      children={function (params) {
        return (
          <VirtualList
            height={params.height}
            overscanRowCount={10}
            ref={setRef}
            rowHeight={rowHeight}
            rowRenderer={cellRenderer}
            width={params.width}
            rowCount={data.length}
          />
        );
      }}
    />
  );
}
