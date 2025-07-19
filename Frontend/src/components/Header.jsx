import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Bot,
  Zap,
  Building,
  CheckCircle,
} from "lucide-react";

const Dropdown = ({
  title,
  children,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (!event.target.closest("[data-dropdown-trigger]")) {
          onToggle();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div
      className="relative flex flex-col items-center"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        data-dropdown-trigger
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-in fade-in slide-in-from-top-5 duration-200"
          id="dropdown"
        >
          <div className="p-8">{children}</div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleMouseEnter = (dropdownName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Small delay to prevent flickering
    setHoverTimeout(timeout);
  };

  const platformContent = (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-600" />
          Overview
        </h3>
        <p className="text-gray-600 mb-4">
          Adople is a cutting-edge AI-powered assistant that transforms
          enterprise productivity. From automating support tickets to
          simplifying knowledge discovery, our unified platform empowers teams
          to get work done faster using natural language.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            AI-driven automation for workflows, answers, and insights
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            24/7 support with contextual understanding
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Built for scalability and secure enterprise environments
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          Features
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-900">
              Conversational AI Interface
            </h4>
            <p className="text-sm text-gray-600">
              Interact with enterprise systems in plain language
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              Unified Knowledge Access
            </h4>
            <p className="text-sm text-gray-600">
              Instantly search across documents, tickets, SOPs, and more
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              Auto Ticket Resolution
            </h4>
            <p className="text-sm text-gray-600">
              Reduce response time with autonomous support
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              Multi-language Support
            </h4>
            <p className="text-sm text-gray-600">
              Serve global teams with seamless multilingual AI
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Building className="w-5 h-5 text-blue-600" />
          By Department
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-900">IT</h4>
            <p className="text-sm text-gray-600">
              Automate troubleshooting, access SOPs, triage issues
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">HR</h4>
            <p className="text-sm text-gray-600">
              Answer policy questions, onboard employees, schedule tasks
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Sales</h4>
            <p className="text-sm text-gray-600">
              Retrieve lead data, update CRM, prep for meetings
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Support</h4>
            <p className="text-sm text-gray-600">
              Auto-resolve tickets, deflect FAQs, assist agents
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <img src="/images/AdopleAI_Logo.png" alt="AdopleAI Logo" className="w-9 h-9" />
                </div>
                <span className="text-xl font-bold text-gray-900">Adople AI</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Dropdown
                title="Platform"
                isOpen={openDropdown === "platform"}
                onToggle={() => handleDropdownToggle("platform")}
                onMouseEnter={() => handleMouseEnter("platform")}
                onMouseLeave={handleMouseLeave}
              >
                {platformContent}
              </Dropdown>

              <Link
                to="/customers"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Customers
              </Link>
              <a
                href="/pricing"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Platform
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Customers
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Resources
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
