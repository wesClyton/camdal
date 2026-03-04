function $(e,n,t,o,a){const s="https://api.whatsapp.com/send",r="5544991038369",p=["*Contato para reserva de carro*","",e?`*Categoria*: ${e}`:null,"",n?`📌 *Local de retirada*: ${n} - 🕔 ${t||""}`:null,"",o?`📌 *Local de devolução*: ${o} - 🕔 ${a||""}`:null].filter(Boolean).join(`
`),d=encodeURIComponent(p);return`${s}?phone=${r}&text=${d}`}export{$ as g};
