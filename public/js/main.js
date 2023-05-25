const editButton = document.querySelectorAll('.edit')
const removeButton = document.querySelectorAll('.remove')
console.log(removeButton)

Array.from(removeButton).forEach(el => {
    el.addEventListener('click', deleteLoad)
})

Array.from(editButton).forEach(el => {
  el.addEventListener('click', getEdit)
})

async function deleteLoad() {
    const loadId = this.dataset.id;
    console.log(loadId, 1)
    try {
      const response = await fetch(`/remove/${loadId}`, {
        method: 'delete',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          'loadIdFromJSFile': loadId,
        }),
      });
      const data = await response.json();
      console.log(loadId, data);
      location.reload();
    } catch (err) {
      console.log(err);
    }
}

async function getEdit() {
  const loadId = this.dataset.id;
  console.log(loadId, 1)
  try {
    const response = await fetch(`/edit/${loadId}`, {
      method: 'get',
      headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}