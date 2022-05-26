import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const VotantSchema = new Schema({
    "id": {type: Number},
    "nome": {type: String},
    "email": {type: String},
    "celular": {type: String},
    "cpf": {type: String},
    "dataNascimento": {type: String},
    "matriculaFuncional": {type: String},
    "urna": {type: String},
    "demaisDados": {type: Schema.Types.Array},
    "aprovado": {type: Boolean},
    "votoSeparado": {type: Boolean},
    "listaInicial": {type: Boolean},
    "motivo": {type: String},
    "fingerprint": {type: String}
});

VotantSchema.plugin(mongoosePaginate);

export default model('Votant', VotantSchema);