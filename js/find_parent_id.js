let  arr = [{
    id:'1',
    name:"四川省",
    children:[{
        id:'11',
        name:"雅安市",
        children:[{
            id:"111",
            name:"雨城区"
        },{
            id:"112",
            name:"哈哈区"
        }]
    }]
}]

const fn = (data, value) => {
    let res = [];

    const dfs = (arr, temp = []) => {
      for (const node of arr) {
        if (node.children) {
          dfs(node.children, temp.concat(node.id))
        } else {
          if (node.id === value) {
            temp.push(node.id)	
            res = temp
          }
        }
      }
    }
    dfs(data)
    return res
  }
  fn(arr,'112')