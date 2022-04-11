import Home from "@/pages/Home";

import En from "@/pages/En/En";
import Ar from "@/pages/Ar/Ar";
import Es from "@/pages/Es/Es";
import Ch from "@/pages/Ch/Ch";
import Fr from "@/pages/Fr/Fr";

import EnDef from "@/pages/En/EnDef/EnDef";
import EnTerm from "@/pages/En/EnTerm/EnTerm";
import EnForm from "@/pages/En/EnForm/EnForm";
import EnFormKin from "@/pages/En/EnForm/EnFormKin";
import EnFormEnerg from "@/pages/En/EnForm/EnFormEnerg";
import EnFormForc from "@/pages/En/EnForm/EnFormForc";
import EnFormMolec from "@/pages/En/EnForm/EnFormMolec";
import EnFormTherm from "@/pages/En/EnForm/EnFormTherm";
import EnFormElstat from "@/pages/En/EnForm/EnFormElstat";
import EnFormDC from "@/pages/En/EnForm/EnFormDC";
import EnFormEldyn from "@/pages/En/EnForm/EnFormEldyn";
import EnFormOpt from "@/pages/En/EnForm/EnFormOpt";

import EsDef from "@/pages/Es/EsDef/EsDef";
import EsTerm from "@/pages/Es/EsTerm/EsTerm";
import EsForm from "@/pages/Es/EsForm/EsForm";
import EsFormKin from "@/pages/Es/EsForm/EsFormKin";
import EsFormEnerg from "@/pages/Es/EsForm/EsFormEnerg";
import EsFormForc from "@/pages/Es/EsForm/EsFormForc";
import EsFormMolec from "@/pages/Es/EsForm/EsFormMolec";
import EsFormTherm from "@/pages/Es/EsForm/EsFormTherm";
import EsFormElstat from "@/pages/Es/EsForm/EsFormElstat";
import EsFormDC from "@/pages/Es/EsForm/EsFormDC";
import EsFormEldyn from "@/pages/Es/EsForm/EsFormEldyn";
import EsFormOpt from "@/pages/Es/EsForm/EsFormOpt";

import FrDef from "@/pages/Fr/FrDef/FrDef";
import FrTerm from "@/pages/Fr/FrTerm/FrTerm";
import FrForm from "@/pages/Fr/FrForm/FrForm";
import FrFormKin from "@/pages/Fr/FrForm/FrFormKin";
import FrFormEnerg from "@/pages/Fr/FrForm/FrFormEnerg";
import FrFormForc from "@/pages/Fr/FrForm/FrFormForc";
import FrFormMolec from "@/pages/Fr/FrForm/FrFormMolec";
import FrFormTherm from "@/pages/Fr/FrForm/FrFormTherm";
import FrFormElstat from "@/pages/Fr/FrForm/FrFormElstat";
import FrFormDC from "@/pages/Fr/FrForm/FrFormDC";
import FrFormEldyn from "@/pages/Fr/FrForm/FrFormEldyn";
import FrFormOpt from "@/pages/Fr/FrForm/FrFormOpt";

import Tasks from "@/pages/Tasks/Tasks";
import TasksMech from "@/pages/Tasks/TasksMech";

import Lab from "@/pages/Lab/Lab";
import ParProv from "@/pages/Lab/ParProv";
import PoslProv from "@/pages/Lab/PoslProv";
import MasVozd from "@/pages/Lab/MasVozd";
import OtnVlazh from "@/pages/Lab/OtnVlazh";
import MoshnLamp from "@/pages/Lab/MoshnLamp";
import OprEDS from "@/pages/Lab/OprEDS";
import UdelSopr from "@/pages/Lab/UdelSopr";
import DifrResh from "@/pages/Lab/DifrResh";


//import EnMech from "@/pages/En/EnMech/EnMech";
//import EnMechDyn from "@/pages/En/EnMech/EnMechDyn/EnMechDyn";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/En',
        name: 'En',
        component: En
    },
    {
        path: '/Ar',
        name: 'Ar',
        component: Ar
    },
    {
        path: '/Es',
        name: 'Es',
        component: Es
    },
    {
        path: '/Ch',
        name: 'Ch',
        component: Ch
    },
    {
        path: '/Fr',
        name: 'Fr',
        component: Fr
    },
    {
        path: '/En/EnDef',
        name: 'EnDef',
        component: EnDef
    },
    {
        path: '/En/EnTerm',
        name: 'EnTerm',
        component: EnTerm
    },
    {
        path: '/En/EnForm',
        name: 'EnForm',
        component: EnForm
    },
    {
        path: '/En/EnForm/EnFormKin',
        name: 'EnFormKin',
        component: EnFormKin
    },
    {
        path: '/En/EnForm/EnFormEnerg',
        name: 'EnFormEnerg',
        component: EnFormEnerg
    },
    {
        path: '/En/EnForm/EnFormForc',
        name: 'EnFormForc',
        component: EnFormForc
    },
    {
        path: '/En/EnForm/EnFormMolec',
        name: 'EnFormMolec',
        component: EnFormMolec
    },
    {
        path: '/En/EnForm/EnFormTherm',
        name: 'EnFormTherm',
        component: EnFormTherm
    },
    {
        path: '/En/EnForm/EnFormElstat',
        name: 'EnFormElstat',
        component: EnFormElstat
    },
    {
        path: '/En/EnForm/EnFormDC',
        name: 'EnFormDC',
        component: EnFormDC
    },
    {
        path: '/En/EnForm/EnFormEldyn',
        name: 'EnFormEldyn',
        component: EnFormEldyn
    },
    {
        path: '/En/EnForm/EnFormOpt',
        name: 'EnFormOpt',
        component: EnFormOpt
    },
    {
        path: '/Es/EsDef',
        name: 'EsDef',
        component: EsDef
    },
    {
        path: '/Es/EsTerm',
        name: 'EsTerm',
        component: EsTerm
    },
    {
        path: '/Es/EsForm',
        name: 'EsForm',
        component: EsForm
    },
    {
        path: '/Es/EsForm/EsFormKin',
        name: 'EsFormKin',
        component: EsFormKin
    },
    {
        path: '/Es/EsForm/EsFormEnerg',
        name: 'EsFormEnerg',
        component: EsFormEnerg
    },
    {
        path: '/Es/EsForm/EsFormForc',
        name: 'EsFormForc',
        component: EsFormForc
    },
    {
        path: '/Es/EsForm/EsFormMolec',
        name: 'EsFormMolec',
        component: EsFormMolec
    },
    {
        path: '/Es/EsForm/EsFormTherm',
        name: 'EsFormTherm',
        component: EsFormTherm
    },
    {
        path: '/Es/EsForm/EsFormElstat',
        name: 'EsFormElstat',
        component: EsFormElstat
    },
    {
        path: '/Es/EsForm/EsFormDC',
        name: 'EsFormDC',
        component: EsFormDC
    },
    {
        path: '/Es/EsForm/EsFormEldyn',
        name: 'EsFormEldyn',
        component: EsFormEldyn
    },
    {
        path: '/Es/EsForm/EsFormOpt',
        name: 'EsFormOpt',
        component: EsFormOpt
    },
    {
        path: '/Fr/FrDef',
        name: 'FrDef',
        component: FrDef
    },
    {
        path: '/Fr/FrTerm',
        name: 'FrTerm',
        component: FrTerm
    },
    {
        path: '/Fr/FrForm',
        name: 'FrForm',
        component: FrForm
    },
    {
        path: '/Fr/FrForm/FrFormKin',
        name: 'FrFormKin',
        component: FrFormKin
    },
    {
        path: '/Fr/FrForm/FrFormEnerg',
        name: 'FrFormEnerg',
        component: FrFormEnerg
    },
    {
        path: '/Fr/FrForm/FrFormForc',
        name: 'FrFormForc',
        component: FrFormForc
    },
    {
        path: '/Fr/FrForm/FrFormMolec',
        name: 'FrFormMolec',
        component: FrFormMolec
    },
    {
        path: '/Fr/FrForm/FrFormTherm',
        name: 'FrFormTherm',
        component: FrFormTherm
    },
    {
        path: '/Fr/FrForm/FrFormElstat',
        name: 'FrFormElstat',
        component: FrFormElstat
    },
    {
        path: '/Fr/EsForm/EsFormDC',
        name: 'FrFormDC',
        component: FrFormDC
    },
    {
        path: '/Fr/FrForm/FrFormEldyn',
        name: 'FrFormEldyn',
        component: FrFormEldyn
    },
    {
        path: '/Fr/FrForm/FrFormOpt',
        name: 'FrFormOpt',
        component: FrFormOpt
    },
    {
        path: '/Tasks/Tasks',
        name: 'Tasks',
        component: Tasks
    },
    {
        path: '/Tasks/TasksMech',
        name: 'TasksMech',
        component: TasksMech
    },
    {
        path: '/Lab/Lab',
        name: 'Lab',
        component: Lab
    },
    {
        path: '/Lab/ParProv',
        name: 'ParProv',
        component: ParProv
    },
    {
        path: '/Lab/PoslProv',
        name: 'PoslProv',
        component: PoslProv
    },
    {
        path: '/Lab/MasVozd',
        name: 'MasVozd',
        component: MasVozd
    },
    {
        path: '/Lab/OtnVlazh',
        name: 'OtnVlazh',
        component: OtnVlazh
    },
    {
        path: '/Lab/MoshnLamp',
        name: 'MoshnLamp',
        component: MoshnLamp
    },
    {
        path: '/Lab/OprEDS',
        name: 'OprEDS',
        component: OprEDS
    },
    {
        path: '/Lab/UdelSopr',
        name: 'UdelSopr',
        component: UdelSopr
    },
    {
        path: '/Lab/DifrResh',
        name: 'DifrResh',
        component: DifrResh
    },
/*    {
        path: '/En/EnMech',
        name: 'EnMech',
        component: EnMech
    },
    {
        path: '/En/EnMech/EnMechDyn',
        name: 'EnMechDyn',
        component: EnMechDyn
    },*/
]

export default routes