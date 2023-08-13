const groupData = (datas, count = 4,countMd) => {
    const groupArray = [];

    count=!!countMd?countMd:count;
    if (!!datas) {
      for (let index = 0; index < datas.length; index += count) {
        const group = datas.slice(index, index + count);
        groupArray.push(group);
      }
      return groupArray;
    }
  };
  
  export default groupData;