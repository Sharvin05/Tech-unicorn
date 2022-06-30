function SideMenu() {
    return (
        <div>
            <div>
                <form class="form-floating searchBar2">
                    <input type="search" className="form-control " placeholder="Search..." aria-label="Search" />
                    <label for="floatingInputInvalid">Search...</label>
                </form>
            </div>
            <div>
                <select class="form-select sort fontStyle" aria-label="Default select example">
                    <option selected>Sort</option>
                    <option value="1">Price:Low to high</option>
                    <option value="2">Price: High to Low</option>
                    <option value="3">date</option>
                </select>
            </div>
            <div>
                <p className="filterDesc fontStyle">Filter By Price</p>
                <form class="form-floating minRange">
                    <input type="search" className="form-control " placeholder="USD" aria-label="Search" />
                    <label for="floatingInputInvalid">USD</label>
                </form>
                <form class="form-floating maxRange">
                    <input type="search" className="form-control " placeholder="USD" aria-label="Search" />
                    <label for="floatingInputInvalid">USD</label>
                </form>
            </div>
            <div className="refine fontStyle">
                <button type="button" className="btn btn-outline-primary">Refine</button>
            </div>
        </div>
    )
}
export default SideMenu;