'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define types
type InventoryItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  date: string;
};

type SaleItem = {
  id: number;
  item: string;
  price: number;
  date: string;
  commission: number;
};

// Sample data for demo purposes
const sampleInventory: InventoryItem[] = [
  { id: 1, name: "Vintage Oak Chair", category: "Furniture", price: 245, date: "2023-12-10" },
  { id: 2, name: "Art Deco Lamp", category: "Lighting", price: 175, date: "2023-12-15" },
  { id: 3, name: "Silver Pocket Watch", category: "Collectibles", price: 195, date: "2023-12-22" },
  { id: 4, name: "Milk Glass Vase", category: "Home Decor", price: 65, date: "2024-01-05" },
  { id: 5, name: "Brass Candlesticks (pair)", category: "Home Decor", price: 85, date: "2024-01-12" },
  { id: 6, name: "Victorian Brooch", category: "Jewelry", price: 125, date: "2024-02-03" },
  { id: 7, name: "Porcelain Figurine", category: "Collectibles", price: 110, date: "2024-02-18" },
  { id: 8, name: "Mahogany Side Table", category: "Furniture", price: 325, date: "2024-03-01" },
];

const sampleSales: SaleItem[] = [
  { id: 101, item: "Vintage Oak Chair", price: 245, date: "2024-01-15", commission: 24.50 },
  { id: 102, item: "Art Deco Lamp", price: 175, date: "2024-02-02", commission: 17.50 },
  { id: 103, item: "Brass Candlesticks (pair)", price: 85, date: "2024-02-18", commission: 8.50 },
  { id: 104, item: "Victorian Brooch", price: 125, date: "2024-03-05", commission: 12.50 },
];

export default function VendorPortalPage() {
  const router = useRouter();
  const [vendorData, setVendorData] = useState({
    name: "",
    email: "",
    boothNumber: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [inventory, setInventory] = useState<InventoryItem[]>(sampleInventory);
  const [sales, setSales] = useState<SaleItem[]>(sampleSales);
  
  // Form state for adding new inventory
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    price: "",
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    // Check if vendor is logged in
    const loggedIn = localStorage.getItem("vendorLoggedIn");
    if (!loggedIn) {
      router.push("/vendor-login");
      return;
    }
    
    // Get vendor data from localStorage (in a real app, this would be from an API)
    setVendorData({
      name: localStorage.getItem("vendorName") || "",
      email: localStorage.getItem("vendorEmail") || "",
      boothNumber: localStorage.getItem("vendorBoothNumber") || "",
    });
    
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("vendorLoggedIn");
    localStorage.removeItem("vendorEmail");
    localStorage.removeItem("vendorName");
    localStorage.removeItem("vendorBoothNumber");
    router.push("/vendor-login");
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    // Make sure we have a default date if none is provided
    const itemDate = newItem.date || new Date().toISOString().split('T')[0];
    
    const newItemObj: InventoryItem = {
      id: Math.max(0, ...inventory.map(item => item.id)) + 1,
      name: newItem.name,
      category: newItem.category,
      price: parseFloat(newItem.price),
      date: itemDate as string,
    };
    
    setInventory([newItemObj, ...inventory]);
    setNewItem({
      name: "",
      category: "",
      price: "",
      date: new Date().toISOString().split('T')[0],
    });
  };

  const handleDeleteItem = (id: number) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-sepia-800">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <h1 className="text-3xl font-bold text-sepia-900">Vendor Portal</h1>
          <p className="text-sepia-700">
            Welcome back, {vendorData.name} (Booth #{vendorData.boothNumber})
          </p>
        </div>
        
        <button
          onClick={handleLogout}
          className="rounded-md bg-sepia-100 px-4 py-2 text-sepia-800 hover:bg-sepia-200"
        >
          Log Out
        </button>
      </div>
      
      {/* Tabs navigation */}
      <div className="mb-6 border-b border-sepia-200">
        <div className="flex flex-wrap -mb-px">
          <button
            className={`mr-2 inline-block p-4 border-b-2 ${
              activeTab === "dashboard"
                ? "border-antique-dark text-antique-dark"
                : "border-transparent hover:border-sepia-300 text-sepia-700"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`mr-2 inline-block p-4 border-b-2 ${
              activeTab === "inventory"
                ? "border-antique-dark text-antique-dark"
                : "border-transparent hover:border-sepia-300 text-sepia-700"
            }`}
            onClick={() => setActiveTab("inventory")}
          >
            Inventory
          </button>
          <button
            className={`mr-2 inline-block p-4 border-b-2 ${
              activeTab === "sales"
                ? "border-antique-dark text-antique-dark"
                : "border-transparent hover:border-sepia-300 text-sepia-700"
            }`}
            onClick={() => setActiveTab("sales")}
          >
            Sales
          </button>
          <button
            className={`mr-2 inline-block p-4 border-b-2 ${
              activeTab === "settings"
                ? "border-antique-dark text-antique-dark"
                : "border-transparent hover:border-sepia-300 text-sepia-700"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </div>
      </div>
      
      {/* Dashboard Tab */}
      {activeTab === "dashboard" && (
        <div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-sepia-900">Current Inventory</h3>
              <p className="text-3xl font-bold text-antique-dark">{inventory.length} Items</p>
              <p className="mt-1 text-sm text-sepia-700">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-sepia-900">Recent Sales</h3>
              <p className="text-3xl font-bold text-antique-dark">${sales.reduce((sum, sale) => sum + sale.price, 0).toFixed(2)}</p>
              <p className="mt-1 text-sm text-sepia-700">Last 30 days</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-sepia-900">Commission Due</h3>
              <p className="text-3xl font-bold text-antique-dark">${sales.reduce((sum, sale) => sum + sale.commission, 0).toFixed(2)}</p>
              <p className="mt-1 text-sm text-sepia-700">10% of sales</p>
            </div>
          </div>
          
          <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-sepia-900">Recent Activity</h3>
            <div className="overflow-hidden rounded-lg border border-sepia-100">
              <table className="min-w-full divide-y divide-sepia-200">
                <thead className="bg-sepia-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Activity</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Item</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sepia-100 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">03/05/2024</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">Sale</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">Victorian Brooch</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">$125.00</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">03/01/2024</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">New Item</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">Mahogany Side Table</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">$325.00</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">02/18/2024</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">Sale</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">Brass Candlesticks (pair)</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">$85.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {/* Inventory Tab */}
      {activeTab === "inventory" && (
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-sepia-900">Your Inventory</h2>
            <div className="overflow-hidden rounded-lg border border-sepia-100">
              <table className="min-w-full divide-y divide-sepia-200">
                <thead className="bg-sepia-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Item</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Date Added</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sepia-100 bg-white">
                  {inventory.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">{item.name}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">{item.category}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">${item.price.toFixed(2)}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">{new Date(item.date).toLocaleDateString()}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        <button 
                          onClick={() => handleDeleteItem(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h2 className="mb-4 text-2xl font-bold text-sepia-900">Add New Item</h2>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <form onSubmit={handleAddItem} className="space-y-4">
                <div>
                  <label htmlFor="itemName" className="mb-1 block text-sm font-medium text-sepia-900">
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2 text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="mb-1 block text-sm font-medium text-sepia-900">
                    Category
                  </label>
                  <select
                    id="category"
                    value={newItem.category}
                    onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2 text-sm"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Lighting">Lighting</option>
                    <option value="Home Decor">Home Decor</option>
                    <option value="Collectibles">Collectibles</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Art">Art</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="price" className="mb-1 block text-sm font-medium text-sepia-900">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    id="price"
                    min="0"
                    step="0.01"
                    value={newItem.price}
                    onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2 text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="mb-1 block text-sm font-medium text-sepia-900">
                    Date Added
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={newItem.date}
                    onChange={(e) => setNewItem({...newItem, date: e.target.value})}
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2 text-sm"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full rounded-md bg-antique-dark px-4 py-2 text-white hover:bg-sepia-800"
                >
                  Add Item
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Sales Tab */}
      {activeTab === "sales" && (
        <div>
          <h2 className="mb-4 text-2xl font-bold text-sepia-900">Your Sales</h2>
          <div className="overflow-hidden rounded-lg border border-sepia-100">
            <table className="min-w-full divide-y divide-sepia-200">
              <thead className="bg-sepia-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Sale ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Item</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Commission (10%)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase text-sepia-700">Net</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sepia-100 bg-white">
                {sales.map((sale) => (
                  <tr key={sale.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">{sale.id}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">{sale.item}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">{new Date(sale.date).toLocaleDateString()}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">${sale.price.toFixed(2)}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">${sale.commission.toFixed(2)}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-sepia-800">${(sale.price - sale.commission).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-sepia-50">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-right text-sm font-medium text-sepia-900">Total:</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-sepia-900">
                    ${sales.reduce((sum, sale) => sum + sale.price, 0).toFixed(2)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-sepia-900">
                    ${sales.reduce((sum, sale) => sum + sale.commission, 0).toFixed(2)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-sepia-900">
                    ${sales.reduce((sum, sale) => sum + (sale.price - sale.commission), 0).toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="mt-8 rounded-lg bg-sepia-100 p-6">
            <h3 className="mb-4 text-xl font-semibold text-sepia-900">Sales Summary</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="text-sm font-medium text-sepia-700">Total Sales</h4>
                <p className="text-2xl font-bold text-antique-dark">
                  ${sales.reduce((sum, sale) => sum + sale.price, 0).toFixed(2)}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="text-sm font-medium text-sepia-700">Commission</h4>
                <p className="text-2xl font-bold text-antique-dark">
                  ${sales.reduce((sum, sale) => sum + sale.commission, 0).toFixed(2)}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="text-sm font-medium text-sepia-700">Net Earnings</h4>
                <p className="text-2xl font-bold text-antique-dark">
                  ${sales.reduce((sum, sale) => sum + (sale.price - sale.commission), 0).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-sepia-900">Account Information</h2>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <form className="space-y-4">
                <div>
                  <label htmlFor="businessName" className="mb-1 block text-sm font-medium text-sepia-900">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={vendorData.name}
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2"
                    disabled
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-sepia-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={vendorData.email}
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2"
                    disabled
                  />
                </div>
                
                <div>
                  <label htmlFor="boothNumber" className="mb-1 block text-sm font-medium text-sepia-900">
                    Booth Number
                  </label>
                  <input
                    type="text"
                    id="boothNumber"
                    value={vendorData.boothNumber}
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2"
                    disabled
                  />
                </div>
                
                <p className="text-sm text-sepia-600">
                  To update your account information, please contact the store management.
                </p>
              </form>
            </div>
          </div>
          
          <div>
            <h2 className="mb-4 text-2xl font-bold text-sepia-900">Change Password</h2>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <form className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="mb-1 block text-sm font-medium text-sepia-900">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="newPassword" className="mb-1 block text-sm font-medium text-sepia-900">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-sepia-900">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full rounded-md border border-sepia-200 bg-sepia-50 px-3 py-2"
                  />
                </div>
                
                <button
                  type="button"
                  className="rounded-md bg-antique-dark px-4 py-2 text-white hover:bg-sepia-800"
                  onClick={() => alert("Password change functionality would be implemented in a real application")}
                >
                  Change Password
                </button>
              </form>
            </div>
            
            <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-sepia-900">Notification Preferences</h3>
              <form className="space-y-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="emailSales" 
                    className="h-4 w-4 rounded border-sepia-300 text-antique-dark focus:ring-antique-dark" 
                    defaultChecked
                  />
                  <label htmlFor="emailSales" className="ml-2 block text-sm text-sepia-800">
                    Email me when an item sells
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="emailReports" 
                    className="h-4 w-4 rounded border-sepia-300 text-antique-dark focus:ring-antique-dark" 
                    defaultChecked
                  />
                  <label htmlFor="emailReports" className="ml-2 block text-sm text-sepia-800">
                    Receive monthly sales reports
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="textAlerts" 
                    className="h-4 w-4 rounded border-sepia-300 text-antique-dark focus:ring-antique-dark" 
                  />
                  <label htmlFor="textAlerts" className="ml-2 block text-sm text-sepia-800">
                    Receive text alerts for important notices
                  </label>
                </div>
                
                <button
                  type="button"
                  className="rounded-md bg-antique-dark px-4 py-2 text-white hover:bg-sepia-800"
                  onClick={() => alert("Preferences saved (demo)")}
                >
                  Save Preferences
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 text-center">
        <p className="text-sm text-sepia-600">This is a demo vendor portal. In a real implementation, this would connect to a database and have user authentication.</p>
      </div>
    </div>
  );
} 