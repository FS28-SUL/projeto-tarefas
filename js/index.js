function mudarTema(){
    const header = document.querySelector("#header");
    if(header.classList.contains("bg-white")){
        header.classList.remove("bg-white", "text-black", "fill-black");
        header.classList.add("bg-black", "text-white", "fill-white");
    }else{
        header.classList.remove("bg-black", "text-white", "fill-white");
        header.classList.add("bg-white", "text-black", "fill-black");
    }
}

function abrirGaveta(){
    const sombra = document.querySelector("#sombra");
    const gaveta = document.querySelector("#gaveta");

    sombra.classList.remove("invisible", "opacity-0");
    gaveta.classList.remove("invisible", "opacity-0");
}

function fecharGaveta(){
    const sombra = document.querySelector("#sombra");
    const gaveta = document.querySelector("#gaveta");

    sombra.classList.add("invisible", "opacity-0");
    gaveta.classList.add("invisible", "opacity-0");
}

function buscarTarefas(){
    fetch("http://localhost:3000/tarefas")
    .then(resposta => resposta.json())
    .then(json => {
        carregarTarefas(json);
    })
}

buscarTarefas()

function carregarTarefas(tarefas){
    const listaDeTarefas = document.querySelector("#lista-de-tarefas");
    tarefas.map(tarefa => {
        listaDeTarefas.innerHTML += `
            <div class="bg-white shadow rounded p-4">
                <h3 class="font-bold">${tarefa.titulo}</h3>
                <p class="text-[14px] text-gray-500 line-clamp-3 mb-4">${tarefa.descricao}</p>
                <div class="flex justify-between items-center">
                    <span class="font-bold text-[10px]">${tarefa.data}</span>
                    <div class="flex gap-3">
                        <box-icon name='pencil' ></box-icon>
                        <box-icon name='trash'></box-icon>
                    </div>
                </div>
            </div>
        `;
    })
}