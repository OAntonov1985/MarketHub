

export default function HeaderSelectorToFilter() {
    return (
        <select className='selector-filter'>
            <option value="Новинки" defaultValue>Новинки</option>
            <option value="From cheap to expensive" >Від дешевих до дорогих</option>
            <option value="From expensive to cheap" >Від дорогих до дешевих</option>
        </select>
    )
}